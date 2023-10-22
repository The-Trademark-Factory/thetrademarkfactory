import { redirect } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY)

export async function load({ url }) {
    // Redirect if "st" url param is not present
    // This secrect string has the format of
    // [created-at]---[VITE_SECRET_STRING]---[purchase-items]---[government-fee]---[international-trademarks]
    // - created-at: the string will expired after 10 minutes
    const secretString = url.searchParams.get('st')
    if (!secretString) throw redirect(303, '/')

    // Redirect if "st" is malformed
    let decodedSecret
    try {
        decodedSecret = Buffer.from(secretString, 'base64').toString('utf8').split('---')
        if (decodedSecret[1] !== import.meta.env.VITE_SECRET_STRING) throw redirect(303, '/')
    } catch (e) {
        throw redirect(303, '/')
    }

    const issueingTime = +decodedSecret[0]
    const now = new Date().getTime()

    // Secret string is expired after 10 minutes
    if (now - issueingTime > 10 * 60 * 1000) throw redirect(303, '/')

    const session_id = url.searchParams.get('si')
    if (!session_id) throw redirect(303, '/')

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (!session || !session.customer_details || !session.payment_intent) throw redirect(303, '/')

    const itemsStr = decodedSecret[2];
    const governmentFee = decodedSecret[3];
    let internationalTrademarks = decodedSecret[4];
    if (internationalTrademarks === 'null') internationalTrademarks = ''

    if (!itemsStr || !governmentFee) throw redirect(303, '/')

    let itemList = []
    try {
        const items = JSON.parse(itemsStr)
        itemList = items.map(({ class: classNo, price, description }) => {
            return {
                name: 'Class ' + classNo, description: description?.join?.('; ') ?? '',
                quantity: 1,
                unit_price: +price,
            }
        })
    } catch (e) {
        throw redirect(303, '/')
    }

    return {
        email: session.customer_details.email,
        itemList,
        governmentFee,
        internationalTrademarks,
        stripePaymentIntentId: session.payment_intent
    }
}
