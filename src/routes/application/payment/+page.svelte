<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { Check, Search, XCircle } from 'lucide-svelte';
	import { searchTerm, details, detailsValid, international } from '$lib/utils/stores';
	import Sidebar from '$lib/components/application/sidebar.svelte';
	import StartOver from '$lib/components/application/startOver.svelte';

	let searchQuery = '';
	let selectedCountries = {};

	$: console.log($international);
</script>

<section class="relative max-w-screen-xl mx-auto py-24">
	<StartOver />
	<div class="grid lg:grid-cols-3 gap-12 pt-11">
		<div class="lg:col-span-2">
			<p class="text-3xl font-bold">{searchResults_page.payment.title}</p>
			<div class="border-t-2 py-6">
				<p class="text-xl font-bold text-ttmfRed">Trademark Details</p>
			</div>
		</div>
		<div>
			<div class="sticky top-12">
				<Sidebar />
			</div>
		</div>
	</div>
</section>
