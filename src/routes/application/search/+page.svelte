<script>
	import { ChevronDown, Info } from 'lucide-svelte';
	import { searchResults_page } from '../../../../data/global.json';
	import SearchWord from '$lib/components/SearchWord.svelte';
	import WordDetails from '$lib/components/searchPage/wordDetails.svelte';
	import ResultsDetails from '$lib/components/searchPage/resultsDetails.svelte';

	export let data;
</script>

<section class="bg-ttmfDarkGreen">
	<div class="max-w-screen-xl mx-auto text-white py-24">
		<p class="text-3xl font-bold">{searchResults_page.searchField.title}</p>
		<div class="pt-4">
			<SearchWord
				placeholder={data?.searchResults
					? data?.searchResults?.apiData?.request?.query
					: 'Search for a work'} />
		</div>
		{#if data.searchResults.apiData}
			<div class="pt-8">
				<p class="text-lg font-bold text-ttmfRed inline-flex items-center gap-2">
					<Info />{searchResults_page.searchField.registered_title}
				</p>
				<p class="text-sm">
					{searchResults_page.searchField.registered_description}
					<a href="#results" class="inline-flex items-center gap-2"
						><span class="underline underline-offset-4">See results below</span><ChevronDown
							size="16" /></a>
				</p>
			</div>
		{/if}
	</div>
</section>
<section id="results" class="max-w-screen-xl mx-auto scroll-mt-32">
	{#if data.searchResults.apiData}
		<div class="mt-14">
			<WordDetails
				word={data.searchResults.apiData.request.query}
				searchResultsDetails={data.searchResults.apiData.trademarkDetails} />
		</div>
		<div class="mt-14">
			<ResultsDetails
				resultsDetails={data.searchResults.apiData.trademarkDetails}
				totalResults={data.searchResults.apiData.count} />
		</div>
		{#if data.searchResults.apiData}
			<div class="pt-12">
				<p>
					Number of trademarks with the word {data.searchResults.apiData.request.query}: {data
						.searchResults.apiData.count}
				</p>
				<p>Never registered: {data.searchResults.apiData.aggregations.status.NEVER_REGISTERED}</p>
				<p>Pending: {data.searchResults.apiData.aggregations.status.PENDING}</p>
				<p>Refused: {data.searchResults.apiData.aggregations.status.REFUSED}</p>
				<p>Removed: {data.searchResults.apiData.aggregations.status.REMOVED}</p>
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
