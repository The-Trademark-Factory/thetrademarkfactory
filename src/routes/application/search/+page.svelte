<script>
	import { ChevronDown, Info, CheckCircle, X } from 'lucide-svelte';
	import { searchTerm, classes, details, detailsValid } from '$lib/utils/stores';
	import { getItem } from '$lib/utils/localStorageUtils';
	import { searchResults_page } from '../../../../data/global.json';
	import SearchWord from '$lib/components/SearchWord.svelte';
	import TrademarkWordDetails from '$lib/components/application/trademarkWordDetails.svelte';
	import TrademarkResultsDetails from '$lib/components/application/trademarkResultsDetails.svelte';

	function getPrevious() {
		const storeMap = {
			searchTerm: { store: searchTerm, check: () => !$searchTerm },
			classes: { store: classes, check: () => $classes.length === 0 },
			details: { store: details, check: () => $details.firstName.length === 0 }
		};

		Object.keys(storeMap).forEach((key) => {
			const localData = getItem(key);
			if (localData && storeMap[key].check()) {
				storeMap[key].store.set(localData);
			}
		});
	}

	export let data;

	$: searchResultsDetails = data.searchResults.apiData.trademarkDetails;
	let previousSearch = getItem('searchTerm');

	$: console.log(previousSearch);
</script>

<section class="bg-ttmfDarkGreen">
	<div class="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-end gap-12 text-white py-24">
		<div>
			<p class="text-3xl font-bold">{searchResults_page.searchField.title}</p>
			<div class="pt-4">
				<SearchWord
					placeholder={data?.searchResults
						? data?.searchResults?.apiData?.request?.query
						: 'Search for a word'} />
			</div>
			{#if data.searchResults.apiData}
				<div class="pt-8">
					<p
						class="text-lg font-bold inline-flex items-center gap-2 {searchResultsDetails
							? 'text-ttmfRed'
							: 'text-green-500'}">
						{#if searchResultsDetails}<Info />{searchResults_page.searchField
								.registered_title}{:else}<CheckCircle />{searchResults_page.searchField
								.available_title}{/if}
					</p>
					{#if searchResultsDetails}
						<p class="text-sm">
							{searchResults_page.searchField.registered_description}
							<a href="#results" class="inline-flex items-center gap-2"
								><span class="underline underline-offset-4">See results below</span><ChevronDown
									size="16" /></a>
						</p>
					{/if}
				</div>
			{/if}
		</div>
		{#if previousSearch}
			<div class="relative xl:pl-20">
				<button
					class=" bg-ttmfLightGreen rounded-md p-6 text-center transition-all hover:shadow-2xl border-2 border-transparent hover:border-white w-full">
					<div class="inline-flex flex-wrap gap-2 items-center text-xl font-bold">
						<span>You started applying for</span>
						<span class="px-3 py-1 border-2 rounded-full">{previousSearch}</span>
					</div>
					<p class="pt-2">Do you want to resume this application?</p>
				</button>
				<button
					class="absolute -top-2 -right-2 w-7 h-7 rounded-full flex flex-col justify-center items-center text-ttmfDarkGreen bg-white transition-all hover:bg-ttmfRed"
					><X /></button>
			</div>
		{/if}
	</div>
</section>
<section id="results" class="max-w-screen-xl mx-auto scroll-mt-32">
	{#if data.searchResults.apiData}
		<div class="py-14">
			<TrademarkWordDetails
				word={data.searchResults.apiData.request.query}
				{searchResultsDetails} />
		</div>
		{#if searchResultsDetails}
			<div class="pb-14">
				<TrademarkResultsDetails
					resultsDetails={data.searchResults.apiData.trademarkDetails}
					totalResults={data.searchResults.apiData.count} />
			</div>
		{/if}
	{:else}
		<div class="py-12">
			<p class="text-2xl font-bold text-ttmfRed">{searchResults_page.searchField.default_title}</p>
			<div class="max-w-none prose pt-6">
				{@html searchResults_page.searchField.default_description}
			</div>
		</div>
	{/if}
</section>
