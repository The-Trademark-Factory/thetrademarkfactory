/** @type {import('./$types.js').RequestHandler} */
import { error, json } from '@sveltejs/kit'
import Stripe from 'stripe'
import { VITE_STRIPE_SECRET_KEY, VITE_STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import firebaseDb from '$lib/utils/firebase.js';

const stripe = new Stripe(VITE_STRIPE_SECRET_KEY, { apiVersion: "2023-08-16" })

export const POST = async ({ request }) => {
    const rawRequest = await request.text();

    const sig = request.headers.get('stripe-signature')
    let event

    try {
        event = await stripe.webhooks.constructEventAsync(
            rawRequest,
            sig,
            VITE_STRIPE_WEBHOOK_SECRET
        )
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`)
        throw error(400, { message: `Webhook Error: ${err.message}` })
    }

    // Handle the event
    switch (event.type) {
        case "payment_intent.succeeded": {
            const documentId = event.data.object.metadata.documentId
            const stripePaymentIntentId = event.data.object.id
            if (!documentId || !stripePaymentIntentId) break

            // Send data to usebasin
            const orderRef = await firebaseDb.collection("applications").doc(documentId).get()
            if (!orderRef.exists) break;

            const {
                customerDetails: {
                    firstName,
                    lastName,
                    phone,
                    email
                },
                total: {
                    gst,
                    total
                }
            } = orderRef.data()

            const formData = new FormData()

            formData.append('Name', `${firstName} ${lastName}`);
            formData.append('Email', email);
            formData.append('Phone', phone);
            formData.append('Stripe payment intent id', stripePaymentIntentId);

            formData.append(
                'GST',
                new Intl.NumberFormat(
                    'us-EN',
                    { style: 'currency', currency: 'AUD' }).format(gst)
            );

            formData.append(
                'Price total',
                new Intl.NumberFormat(
                    'us-EN',
                    { style: 'currency', currency: 'AUD' }).format(total)
            );

            formData.append('Order detail url', `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/${documentId}`);

            fetch(import.meta.env.VITE_USEBASIN_SUCCESS_FORM_URL, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            })
                .then(() => { })
                .catch(() => {
                    console.log('Error sending data to basin: ', e)
                });

            try {
                // Update related firebase record
                await firebaseDb.collection('applications').doc(documentId).update({
                    stripe: {
                        status: "paid",
                        paymentIntentId: stripePaymentIntentId
                    }
                });
            } catch (e) {
                console.log('Updating payment intent failed: ', e)
            }
        }
    }

    // Inform Stripe that the app has received the event
    return json({ received: true })
}
