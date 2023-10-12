<script>
	import { enhance } from '$app/forms';
	import { searchResults_page } from '../../../../data/global.json';
	import ClassesResultsDetails from '$lib/components/application/classesResultsDetails.svelte';
	import Sidebar from '$lib/components/application/sidebar.svelte';
	import { Search } from 'lucide-svelte';
	import StartOver from '$lib/components/application/startOver.svelte';

	export let form;

	let term;
	let loading = false;
</script>

<section class="relative max-w-screen-xl mx-auto py-12 lg:py-24 max-2xl:px-6">
	<StartOver />
	<div class="grid lg:grid-cols-3 gap-12 pt-11">
		<div class="lg:col-span-2">
			<p class="text-3xl font-bold">{searchResults_page.searchClasses.title}</p>
			<div class="mt-4">
				<form
					action="?/search"
					method="POST"
					use:enhance={() => {
						loading = true;

						return async ({ update }) => {
							await update();
							loading = false;
						};
					}}
					class="relative flex max-sm:flex-wrap items-center gap-4 w-full">
					<input
						type="text"
						name="term"
						id="term"
						bind:value={term}
						placeholder="Search by Keywords"
						class="relative text-xl font-bold text-black placeholder:font-normal pl-14 pr-6 py-6 rounded w-full shadow-pricingShadow" />
					<div class="absolute left-4 max-sm:top-6">
						<Search color="#D34B44" />
					</div>
					<button
						type="submit"
						class="bg-ttmfRed text-white text-xl font-bold px-12 py-4 sm:py-6 rounded max-sm:w-full"
						>{loading ? 'Searching...' : 'Search'}</button>
				</form>
			</div>
			{#if form && form.searchResults.apiData}
				{#if form && form.searchResults.apiData.results}
					<div class="pt-6">
						<ClassesResultsDetails
							resultsDetails={form.searchResults.apiData.results}
							term={form.searchResults.term} />
					</div>
				{/if}
			{:else}
				<div class="pt-12">
					<p class="text-2xl font-bold text-ttmfRed">
						{searchResults_page.searchClasses.default_title}
					</p>
					<div class="max-w-none prose pt-6">
						{@html searchResults_page.searchClasses.default_description}
					</div>
				</div>
			{/if}
		</div>
		<div>
			<div class="sticky top-12">
				<Sidebar />
			</div>
		</div>
	</div>
</section>
