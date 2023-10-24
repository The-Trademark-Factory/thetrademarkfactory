<script>
	import { onMount } from 'svelte';
	import { CheckCircle } from 'lucide-svelte';
	import { openDB, getImage, deleteImage } from '$lib/utils/indexedDB';
	import { getItem } from '$lib/utils/localStorageUtils';
	import { searchTerm, classes, details, international, searchType } from '$lib/utils/stores';

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

	async function getStoredImage() {
		let imageDB = await openDB();
		let imageFile = getImage(imageDB);
		return imageFile;
	}

	function clearData() {
		localStorage.clear();
		searchType.set('');
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
	}

	onMount(async () => {
		const localData =
			getItem('searchType') === 'word' ? getItem('searchTerm') : await getStoredImage();
		const formData = new FormData();
		formData.append('email', email);
		formData.append('search', localData);
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
			deleteImage();
			clearData();
		};
	});
</script>

<svelte:head>
	<title>Your order | TTMF</title>
</svelte:head>

<section class="bg-ttmfDarkGreen">
	<div class="text-white max-w-screen-xl mx-auto scroll-mt-32 max-2xl:px-6 lg:text-center">
		<p
			class="inline-flex lg:items-center justify-center gap-6 py-20 lg:py-32 text-2xl lg:text-4xl font-bold">
			<span class="text-green-500"><CheckCircle size="60" /></span>{message}
		</p>
	</div>
</section>
