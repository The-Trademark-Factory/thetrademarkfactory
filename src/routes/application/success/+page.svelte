<script>
	import { onMount } from 'svelte';
	import { searchTerm, classes, details, international } from '$lib/utils/stores';

	export let data;

	$: ({
		email,
		personalDetails,
		itemList,
		governmentFee,
		internationalTrademarks,
		stripePaymentIntentId
	} = data);

	let message = 'Processing your order...';

	onMount(() => {
		localStorage.clear();
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);

		const formData = new FormData();
		formData.append('email', email);
		formData.append('stripe_payment_intent_id', stripePaymentIntentId);
		formData.append('personal_details', personalDetails);
		formData.append('purchase_items', JSON.stringify(itemList));
		formData.append(
			'government_fee',
			new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'AUD' }).format(governmentFee)
		);
		formData.append(
			'price_total',
			new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'AUD' }).format(
				+governmentFee * itemList.length +
					itemList.reduce((acc, { quantity, unit_price }) => acc + quantity * unit_price, 0)
			)
		);
		formData.append('international_trademarks', internationalTrademarks);

		const xhr = new XMLHttpRequest();

		// Send data to usebasin
		xhr.open('POST', import.meta.env.VITE_USEBASIN_SUCCESS_FORM_URL, true);
		xhr.send(formData);

		xhr.onload = function () {
			message = 'Success, thank you for your order!';
		};
	});
</script>

<svelte:head>
	<title>Your order | TTMF</title>
</svelte:head>

<section class="max-w-screen-xl mx-auto scroll-mt-32 max-2xl:px-6">
	<p class="text-center py-20">{message}</p>
</section>
