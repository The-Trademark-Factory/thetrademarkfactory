<script>
	import { ChevronDown, Info, CheckCircle, X, WholeWord, Image } from 'lucide-svelte';
	import { openDB, getImage, deleteImage } from '$lib/utils/indexedDB';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { searchType, searchTerm, classes, details, international } from '$lib/utils/stores';
	import { getItem } from '$lib/utils/localStorageUtils';
	import { searchResults_page } from '../../../../data/global.json';
	import SearchWord from '$lib/components/SearchWord.svelte';
	import TrademarkWordDetails from '$lib/application/trademarkWordDetails.svelte';
	import TrademarkResultsDetails from '$lib/application/trademarkResultsDetails.svelte';
	import SearchImage from '$lib/application/searchImage.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;

	let previousSearch, imageUrl, imageDB, image;
	$: searchResultsDetails = data.searchResults.apiData.trademarks;
	$: availableWord = data.searchResults.apiData.count === 0;
	$: word = data.searchResults.searchTerm;
	$: activeTab =
		searchType === 'logo' || $page.url.searchParams.get('type') === 'logo' ? 'logo' : 'word';
	const tabs = [
		{ name: 'word', label: 'Word' },
		{ name: 'logo', label: 'Logo/Image' }
	];

	onMount(async () => {
		imageDB = await openDB();
		image = await getImage(imageDB);
		if (image) {
			imageUrl = URL.createObjectURL(image);
		}
		previousSearch =
			getItem('searchType') === 'word'
				? getItem('searchTerm')
				: getItem('searchType') === 'logo'
				? 'typeLogo'
				: '';
		if (previousSearch === 'typeLogo') {
			activeTab = 'logo';
		}
	});

	function gotoPrevious() {
		const storeMap = {
			searchType: { store: searchType, check: () => !$searchType },
			searchTerm: { store: searchTerm, check: () => !$searchTerm },
			classes: { store: classes, check: () => $classes.length === 0 },
			details: { store: details, check: () => Object.keys($details).length === 0 },
			international: { store: international, check: () => $international.length === 0 }
		};

		Object.keys(storeMap).forEach((key) => {
			const localData = getItem(key);
			if (localData && storeMap[key].check()) {
				storeMap[key].store.set(localData);
			}
		});
		if (searchType === 'word') {
			deleteImage();
		}
		goto('/application/classes');
	}

	function deletePrevious() {
		localStorage.clear();
		searchType.set('word');
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
		previousSearch = '';
	}
</script>

<SeoHead pageDetails={searchResults_page} />

<section class="bg-ttmfDarkGreen">
	<div
		class="max-w-screen-xl mx-auto grid items-end gap-12 text-white py-12 lg:py-24 max-2xl:px-6 {previousSearch &&
		previousSearch !== 'typeLogo'
			? 'lg:grid-cols-2'
			: 'lg:grid-cols-1'}">
		<div>
			<p class="text-3xl font-bold">
				{activeTab === 'word'
					? searchResults_page.searchField.title_word
					: searchResults_page.searchField.title_logo}
			</p>
			<div class="flex items-center gap-4 pt-8 pb-6">
				{#each tabs as el}
					<button
						class="inline-flex items-center gap-2 text-sm font-bold px-6 py-2 border-2 border-transparent rounded-full {activeTab ===
						el.name
							? 'bg-ttmfRed text-white'
							: 'bg-ttmfLightGreen hover:border-white'}"
						on:click={() => {
							activeTab = el.name;
						}}>
						{el.label}
						{#if el.name === 'word'}
							<WholeWord size="20" />
						{:else}
							<Image size="20" />
						{/if}
					</button>
				{/each}
			</div>
			{#if activeTab === 'logo'}
				<SearchImage
					on:deletePrevious={() => deletePrevious()}
					on:gotoPrevious={() => gotoPrevious()}
					{previousSearch}
					{imageUrl}
					{imageDB} />
			{:else}
				<div>
					<SearchWord
						placeholder={data?.searchResults
							? data?.searchResults?.apiData?.request?.query
							: 'Search for a word'}
						isSearchPage={true} />
				</div>
			{/if}
			{#if data.searchResults.apiData && !searchResults_page.searchField.disable_registered}
				<div class="pt-8">
					<p
						class="text-lg font-bold inline-flex gap-2 {!availableWord
							? 'text-ttmfRed'
							: 'text-green-500'}">
						{#if !availableWord}<span class="max-lg:hidden pt-0.5"><Info /></span
							>{searchResults_page.searchField.registered_title}{:else if availableWord}<span
								class="max-lg:hidden"><CheckCircle /></span
							>{searchResults_page.searchField.available_title}{/if}
					</p>
					{#if !availableWord}
						<p class="text-sm pt-4">
							{searchResults_page.searchField.registered_description}
							<a href="#results" class="inline-flex items-center gap-2"
								><span class="underline underline-offset-4 pt-1">See results below</span
								><ChevronDown size="16" /></a>
						</p>
					{/if}
				</div>
			{/if}
		</div>

		{#if previousSearch && previousSearch !== 'typeLogo'}
			<div class="relative xl:pl-20">
				<button
					on:click={() => {
						gotoPrevious();
					}}
					class=" bg-ttmfLightGreen rounded-md p-4 lg:p-6 text-center transition-all hover:shadow-2xl border-2 border-transparent hover:border-white w-full">
					<div
						class="inline-flex flex-wrap gap-3 items-center justify-center text-lg lg:text-xl font-bold">
						<span>You started applying for</span>
						<span class="px-3 py-1 border-2 rounded-full">{previousSearch}</span>
					</div>
					<p class="pt-3 max-lg:text-sm">Do you want to resume this application?</p>
				</button>
				<button
					on:click={() => {
						deletePrevious();
					}}
					class="absolute -top-2 -right-2 w-7 h-7 rounded-full flex flex-col justify-center items-center text-ttmfDarkGreen bg-white transition-all hover:bg-ttmfRed"
					><X /></button>
			</div>
		{/if}
	</div>
</section>
<section id="results" class="max-w-screen-xl mx-auto scroll-mt-32 max-2xl:px-6">
	{#if data.searchResults.apiData}
		<div class="py-10 lg:py-14">
			<TrademarkWordDetails {word} {searchResultsDetails} {availableWord} />
		</div>
		{#if !availableWord}
			<div class="pb-14">
				<TrademarkResultsDetails
					resultsDetails={data.searchResults.apiData.trademarks}
					totalResults={data.searchResults.apiData.count} />
			</div>
		{/if}
	{:else}
		<div class="py-12">
			<p class="text-2xl font-bold text-ttmfRed">
				{activeTab === 'word'
					? searchResults_page.searchField.default_title_word
					: searchResults_page.searchField.default_title_logo}
			</p>
			<div class="max-w-none prose pt-6">
				{@html activeTab === 'word'
					? searchResults_page.searchField.default_description_word
					: searchResults_page.searchField.default_description_logo}
			</div>
		</div>
	{/if}
</section>
