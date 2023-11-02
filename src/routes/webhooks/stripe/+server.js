/** @type {import('./$types.js').RequestHandler} */
import { error, fail, json } from '@sveltejs/kit'
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
        case "checkout.session.completed": {
            const orderRef = await firebaseDb.collection("applications").doc(event.data.object.id).get()
            if (!orderRef.exists) throw fail(404, { message: 'Order not found 1' })

            // Update the related firebase record
            await firebaseDb.collection('applications').doc(event.data.object.id).update({
                'stripe.paymentIntentId': event.data.object.payment_intent
            });

            break
        }

        case "payment_intent.succeeded": {
            const stripePaymentIntentId = event.data.object.id
            if (!stripePaymentIntentId) throw fail(404, { message: 'Order not found 2' })

            const orderRef = await firebaseDb
                .collection("applications")
                .where('stripe.paymentIntentId', '==', stripePaymentIntentId)
                .get()
            if (!orderRef.length) throw fail(404, { message: 'Order not found 3' })

            const order = orderRef[0]
            const orderData = order.data()

            // Update the related firebase record
            await firebaseDb.collection('applications').doc(order.id).update({
                'stripe.status': "paid"
            });

            // Send data to basin 
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
            } = orderData

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

            formData.append('Order detail url', `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/${order.id}`);

            fetch(import.meta.env.VITE_USEBASIN_SUCCESS_FORM_URL, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            })
                .then(() => { })
                .catch(() => {
                    console.log('Error sending data to basin: ', e)
                });
        }
    }

    // Inform Stripe that the app has received the event
    return json({ received: true })
}
