import { fail, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY)

export const actions = {
    checkout: async ({ request }) => {
        const form = await request.formData();
        const itemsStr = form.get('items');
        const governmentFee = form.get('government_fee');

        const items = JSON.parse(itemsStr)

        // This string will be used for guarding the "/application/success" page from being harassed
        const secretString = Buffer.from(`${new Date().getTime()}-${import.meta.env.VITE_SECRET_STRING}`, 'utf8').toString('base64')

        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    ...items.map(({ class: classNo, price, description }) => {
                        return {
                            quantity: 1,
                            price_data: {
                                unit_amount: +price * 100,
                                currency: 'AUD',
                                product_data: { name: 'Class ' + classNo, description: description?.join?.('; ') ?? '' }
                            }
                        }
                    }),
                    {
                        quantity: items.length,
                        price_data: {
                            unit_amount: +governmentFee * 100,
                            currency: 'AUD',
                            product_data: { name: 'IP Australia Fee' }
                        }
                    }],
                mode: 'payment',
                success_url: `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/success?str=${secretString}`,
                cancel_url: `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/search`, // this cancel page can be "/application/payment" but for now when accessing it directly, the page is empty
            });

            throw redirect(303, session.url)
        } catch (e) {
            console.log('Stripe error: ', e)
            return fail(400, { error: JSON.stringify(e) })
        }
    }
};
