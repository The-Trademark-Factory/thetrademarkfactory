<script>
	import { onMount } from 'svelte';
	import { CheckCircle } from 'lucide-svelte';
	import { deleteImage } from '$lib/utils/indexedDB';
	import { searchTerm, classes, details, international, searchType } from '$lib/utils/stores';
export let data;

	function clearData() {
		localStorage.clear();
		searchType.set('word');
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
	}

	onMount(() => {
		deleteImage();
		clearData();

		// Fire the purchase conversion to the dataLayer for GTM / Google Ads
		if (data?.orderTotal) {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'purchase_complete',
				conversion_value: data.orderTotal,
				currency_code: data.currency,
				transaction_id: data.transactionId
			});
		}
	});
</script>

<svelte:head>
	<title>Your order | TTMF</title>
</svelte:head>

<section class="bg-ttmfDarkGreen">
	<div class="text-white max-w-screen-xl mx-auto scroll-mt-32 max-2xl:px-6 lg:text-center">
		<p
			class="inline-flex lg:items-center justify-center gap-6 py-20 lg:py-32 text-2xl lg:text-4xl font-bold">
			<span class="text-green-500"><CheckCircle size="60" /></span>Success, thank you for your
			order!
		</p>
	</div>
</section>
