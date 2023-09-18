<script>
	import SearchWord from '$lib/components/SearchWord.svelte';

	export let data;
	console.log(data);
</script>

{#if data.searchResults.apiData}
	<section class="bg-black">
		<div class="max-w-screen-xl mx-auto text-white py-24">
			<h1 class="text-6xl">Search for: {data.searchResults.apiData.request.query}</h1>
		</div>
	</section>
{/if}
<section class="max-w-screen-xl mx-auto">
	<div class="pt-12">
		<SearchWord />
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
		{#if data.searchResults.apiData.trademarkDetails}
			<div class="pt-12 flex flex-col gap-12">
				<p>First 6 results:</p>
				{#each data.searchResults.apiData.trademarkDetails as el}
					<div class="bg-gray-100 p-12">
						<p>Words: {el.words}</p>
						<p>Owner: {el.owner[0].name}</p>
						<p>Filled: {el.filingDate}</p>
						<p>Accepted: {el.acceptanceDate}</p>
						<p>Classes:</p>
						{#each el.goodsAndServices as el}
							<div class="bg-gray-200 p-4">
								<p>Class: {el.class}</p>
								<p>Description: {el.descriptionText}</p>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		<div class="pt-24">
			<pre class="text-lg">{JSON.stringify(data, null, 2)}</pre>
		</div>
	{/if}
</section>
