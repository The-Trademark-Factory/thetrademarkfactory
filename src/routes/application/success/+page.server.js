import { redirect } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY)

export async function load({ url }) {
    // Redirect if "st" url param is not present
    // This secrect string has the format of
    // [created-at]---[VITE_SECRET_STRING]---[personal-details]---[purchase-items]---[government-fee]---[international-trademarks]
    // - created-at: the string will expired after 10 minutes
    const secretString = url.searchParams.get('st')
    if (!secretString) throw redirect(303, '/')

    let decodedSecret
    try {
        decodedSecret = Buffer.from(secretString, 'base64').toString('utf8').split('---')
    } catch (e) {
        throw redirect(303, '/')
    }

    // Redirect if "st" is malformed
    if (decodedSecret.length !== 6) throw redirect(303, '/')
    if (decodedSecret[1] !== import.meta.env.VITE_SECRET_STRING) throw redirect(303, '/')

    const issueingTime = +decodedSecret[0]
    const now = new Date().getTime()

    // Secret string is expired after 10 minutes
    if (now - issueingTime > 10 * 60 * 1000) throw redirect(303, '/')

    let [, , personalDetails, itemsStr, governmentFee, internationalTrademarks] = decodedSecret
    if (internationalTrademarks === 'null') internationalTrademarks = ''

    if (!personalDetails || !itemsStr || !governmentFee) throw redirect(303, '/')

    const session_id = url.searchParams.get('si')
    if (!session_id) throw redirect(303, '/')

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (!session || !session.customer_details || !session.payment_intent) throw redirect(303, '/')

    // Return purchase data so the success page can fire a conversion to GTM
    return {
        orderTotal: session.amount_total / 100, // Stripe amounts are in cents
        currency: (session.currency || 'aud').toUpperCase(),
        transactionId: session.id
    }
}
