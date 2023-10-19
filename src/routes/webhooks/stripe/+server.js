/** @type {import('./$types.js').RequestHandler} */
import { error, json } from '@sveltejs/kit'

export const POST = async ({ request }) => {
    const sig = request.headers['stripe-signature']
    let event

    try {
        event = stripe.webhooks.constructEvent(
            request.body,
            sig,
            process.env.VITE_STRIPE_WEBHOOK_SECRET
        )
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`)
        throw error(400, { message: `Webhook Error: ${err.message}` })
    }

    // Handle the event
    switch (event.type) { }

    // Inform Stripe that the app has received the event
    return json({ received: true })
}
