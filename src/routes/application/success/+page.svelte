<script>
	import { onMount } from 'svelte';
	import { CheckCircle } from 'lucide-svelte';
	import { openDB, getImage, deleteImage } from '$lib/utils/indexedDB';
	import { getItem } from '$lib/utils/localStorageUtils';
	import { searchTerm, classes, details, international, searchType } from '$lib/utils/stores';

	export let data;

	$: ({ personalDetails, itemList, governmentFee, internationalTrademarks, stripePaymentIntentId } =
		data);
	$: personalData = JSON.parse(personalDetails);
	$: email = personalData.email;

	const fieldMappings = {
		owner: 'Owner',
		based: 'Based',
		firstName: 'First name',
		lastName: 'Last name',
		address: 'Address',
		city: 'City',
		state: 'State',
		postcode: 'Post code',
		country: 'Country',
		phone: 'Phone',
		company: 'Company',
		abn: 'ABN'
	};

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

		formData.append('Email', email);
		formData.append('Search', localData); // searched word or image
		formData.append('Stripe payment intent id', stripePaymentIntentId);

		// Each "Personal details" prop formatted as a form field
		Object.keys(personalData).forEach((key) => {
			if (fieldMappings[key]) formData.append(fieldMappings[key], personalData[key]);
		});

		// Each purchase item formatted as a form field
		itemList.forEach(({ name, description, quantity, unit_price }, i) =>
			formData.append(
				'Purchase item ' + String(i + 1).padStart(2, '0'),
				`Name: ${name} - Description: ${description} - Quantity: ${quantity} - Unit price: ${new Intl.NumberFormat(
					'us-EN',
					{ style: 'currency', currency: 'AUD' }
				).format(unit_price)}`
			)
		);

		formData.append(
			'Government fee',
			`${new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'AUD' }).format(
				governmentFee
			)} x ${itemList.length}`
		);

		formData.append(
			'Price total',
			new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'AUD' }).format(
				+governmentFee * itemList.length +
					itemList.reduce((acc, { quantity, unit_price }) => acc + quantity * unit_price, 0)
			)
		);

		formData.append('International trademarks', internationalTrademarks);

		fetch(import.meta.env.VITE_USEBASIN_SUCCESS_FORM_URL, {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: formData
		})
			.then(() => {
				deleteImage();
				clearData();

				message = 'Success, thank you for your order!';
			})
			.catch(() => {
				message = 'Failure, please try again!';
			});
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
