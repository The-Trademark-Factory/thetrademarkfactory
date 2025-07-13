import { fail, redirect } from '@sveltejs/kit';
import { doc, setDoc } from 'firebase/firestore';
import Stripe from 'stripe';
import firebaseDb from '$lib/utils/firebase.js';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export const actions = {
	checkout: async ({ request }) => {
		const form = await request.formData();
		const personalDetailsStr = form.get('personal_details');
		const itemsStr = form.get('items');
		const governmentFee = form.get('government_fee');
		const internationalTrademarks = form.get('international_trademarks');
		const searchType = form.get('search_type');
		const searchSource = form.get('search_source');

		const items = JSON.parse(itemsStr);

		// This string will be used for guarding the "/application/success" page from being harassed
		const secretString = Buffer.from(
			`${new Date().getTime()}---${
				import.meta.env.VITE_SECRET_STRING
			}---${personalDetailsStr}---${itemsStr.slice(0, 500)}---${governmentFee}---${
				internationalTrademarks || 'null'
			}`,
			'utf8'
		).toString('base64');

		try {
			const {
				owner,
				email,
				based,
				firstName,
				lastName,
				address,
				address2,
				city,
				state,
				postcode,
				country,
				phone,
				company,
				abn,
				orderNote
			} = JSON.parse(personalDetailsStr);

			const gstTotal = 0.1 * items.reduce((acc, { price }) => acc + +price, 0);
			const subtotal =
				+governmentFee * items.length + items.reduce((acc, { price }) => acc + +price, 0);

			const itemsTotal =
				items.reduce((total, item) => {
					return total + +item.price * 100;
				}, 0) +
				+governmentFee * 100 * items.length;
			const stripeFee = Math.round(itemsTotal * 0.0175 + 30);
			const stripeFeeCalculated = stripeFee / 100;

			const session = await stripe.checkout.sessions.create({
				line_items: [
					...items.map(({ class: classNo, price }) => {
						return {
							quantity: 1,
							price_data: {
								unit_amount: +price * 100,
								currency: 'AUD',
								product_data: {
									name: 'Class ' + classNo
								}
							},
							tax_rates: [import.meta.env.VITE_STRIPE_TAX_RATE]
						};
					}),
					{
						quantity: items.length,
						price_data: {
							unit_amount: +governmentFee * 100,
							currency: 'AUD',
							product_data: { name: 'IP Australia Fee' }
						}
					},
					{
						quantity: 1,
						price_data: {
							unit_amount: stripeFee,
							currency: 'AUD',
							product_data: { name: 'Credit Card Fee (1.75% + $0.30)' }
						},
						tax_rates: [import.meta.env.VITE_STRIPE_TAX_RATE]
					}
				],
				mode: 'payment',
				invoice_creation: {
					enabled: true
				},
				success_url: `${
					import.meta.env.VITE_PUBLIC_SITE_URL
				}/application/success?st=${secretString}&si={CHECKOUT_SESSION_ID}`,
				cancel_url: `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/search` // this cancel page can be "/application/payment" but for now when accessing it directly, the page is empty
			});

			// Create a firebase record
			await setDoc(doc(firebaseDb, 'applications', session.id), {
				createdAt: new Date(),
				applicationDetails: {
					owner,
					based,
					address,
					addressTwo: address2 || '',
					city,
					state,
					postcode,
					country,
					companyName: company || '',
					abn: abn || '',
					orderNote: orderNote || ''
				},
				applicationType: {
					type: searchType,
					source: searchSource
				},
				customerDetails: {
					firstName,
					lastName,
					phone: phone || '',
					email
				},
				lineItems: items.map(({ class: classNo, price, description }) => {
					return {
						class: classNo,
						descriptions: description || [],
						price: {
							government: +governmentFee,
							gst: 0.1 * +price,
							service: price
						}
					};
				}),
				internationalTrademarks: (internationalTrademarks || '').split(', '),
				stripe: {
					status: 'unpaid',
					paymentIntentId: ''
				},
				total: {
					gst: gstTotal + 0.1 * stripeFeeCalculated,
					subtotal,
					stripeFee: stripeFeeCalculated,
					total: subtotal + gstTotal + stripeFeeCalculated + 0.1 * stripeFeeCalculated
				}
			});

			throw redirect(303, session.url);
		} catch (e) {
			console.log('Stripe error: ', e);

			if (e.status === 303) throw redirect(303, e.location);

			return fail(400, { error: JSON.stringify(e) });
		}
	}
};
