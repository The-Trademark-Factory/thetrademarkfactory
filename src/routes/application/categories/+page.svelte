<script>
	import SearchClass from '$lib/components/SearchClass.svelte';

	export let data;
	$: console.log(data);
</script>

{#if data.searchResults.apiData}
	<section class="bg-black">
		<div class="max-w-screen-xl mx-auto text-white py-24">
			<h1 class="text-6xl">Search for: {data.searchResults.searchTerm}</h1>
		</div>
	</section>
{/if}
<section class="max-w-screen-xl mx-auto">
	<div class="pt-12">
		<SearchClass />
	</div>
	{#if data.searchResults.apiData}
		<div class="pt-12">
			<p>
				Classes found: {data.searchResults.apiData.count}
			</p>
		</div>
		{#if data.searchResults.apiData.results}
			<div class="pt-12 flex flex-col gap-12">
				{#each data.searchResults.apiData.results as el}
					<div class="bg-gray-100 p-12">
						<p>ID: {el.id}</p>
						<p>Class number: {el.gsClassNumber}</p>
						<p>Description: {el.description}</p>
						<p>Trademark Class: {el.tradeMarkClass.id}</p>
						<p>Change Comment: {el.changeComment}</p>
						<p>Created Date: {el.createdDate}</p>
					</div>
				{/each}
			</div>
		{/if}
		<div class="pt-24">
			<pre class="text-lg">{JSON.stringify(data, null, 2)}</pre>
		</div>
	{/if}
</section>
