<script>
	import { goto } from '$app/navigation';
	import { setItem } from '$lib/utils/localStorageUtils';
	import { deleteImage } from '$lib/utils/indexedDB';
	import { searchTerm, searchType } from '$lib/utils/stores';
	import { searchResults_page } from '../../../data/global.json';

	export let word, searchResultsDetails;

	let showAllDescriptions;
	let sortedClasses,
		resultClasses = {};
	let content = searchResults_page;
	let classDescription = searchResults_page.classes_description;

	function apply() {
		searchType.set('word');
		searchTerm.set(word);
		setItem('searchType', 'word');
		setItem('searchTerm', word);
		deleteImage();
		goto('/application/classes');
	}

	$: {
		sortedClasses = {};
		searchResultsDetails?.forEach((item) => {
			item.goodsAndServices.forEach((good) => {
				if (!sortedClasses[good.class]) {
					sortedClasses[good.class] = [];
				}
				sortedClasses[good.class].push(...good.descriptionText);
			});
		});

		resultClasses = {
			sortedClasses: Object.keys(sortedClasses).map((key) => ({
				class: key,
				descriptionText: sortedClasses[key]
			}))
		};
	}
</script>

<div class="bg-white shadow-pricingShadow rounded-lg px-6 py-10 lg:p-12">
	<div class="flex flex-wrap items-center gap-4 lg:gap-6 font-bold border-b pb-10 mb-10">
		<p class="text-3xl lg:text-5xl">Trademark</p>
		<p
			class="rounded-full py-1 lg:py-3 px-4 lg:px-7 border-2 text-lg lg:text-3xl capitalize border-ttmfRed text-ttmfRed bg-ttmfRed/20">
			{word}
		</p>
	</div>
	{#if searchResultsDetails && !content.wordDetails.existing.disable}
		<div class="pb-8">
			<p class="text-xl font-bold">
				{content.wordDetails.existing.title}
			</p>
			<p class="text-lg max-lg:pt-4">{content.wordDetails.existing.description}</p>
		</div>
		<div class="space-y-5">
			{#each resultClasses.sortedClasses as el}
				<div class="bg-ttmfBg border-2 border-ttmfBeige rounded-lg py-5 px-7">
					<div class="space-y-1">
						<p class="text-ttmfRed text-lg font-bold">Class {el.class}</p>
						<p class="text-ttmfBlack">
							{classDescription.find((desc) => desc.class_number === +el.class)?.description ?? ''}
						</p>
					</div>
					<div class="flex flex-wrap items-center gap-2 pt-3 text-sm">
						{#each showAllDescriptions === el.class || el.descriptionText.length <= 3 ? el.descriptionText : el.descriptionText.slice(0, 2) as description}
							<span class="bg-white rounded-md py-1 px-3 border-2 border-ttmfCreme/30"
								>{description}</span>
						{/each}
						{#if el.descriptionText.length > 3 && showAllDescriptions !== el.class}
							<button
								on:click={() => {
									showAllDescriptions = el.class;
								}}
								class="bg-ttmfRed text-white font-bold rounded-full py-1 px-3 border-2 border-transparent transition-all hover:bg-transparent hover:text-ttmfRed hover:border-ttmfRed">
								Show all
							</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
	<div class={searchResultsDetails ? 'pt-11' : ''}>
		<p class="text-xl font-bold">
			{searchResultsDetails
				? content.wordDetails.process.title_existing
				: content.wordDetails.process.title_available}
		</p>
		<div class="border-t pt-0 mt-10 grid lg:grid-cols-2 gap-x-12">
			{#each content.wordDetails.process.features as el}
				<div class="flex items-center gap-4 py-6 border-b">
					<img src={el.image} alt="An icon" class="max-lg:w-10" />
					<p>{el.description}</p>
				</div>
			{/each}
		</div>
		<div class="pt-12 lg:pt-20">
			<div class="flex flex-wrap items-center gap-8 lg:gap-12">
				<div>
					<p class="font-bold">
						<span class="text-2xl">AU</span><span class="text-5xl"
							>{content.wordDetails.pricing.price}</span>
					</p>
					<p class="pt-2">{content.wordDetails.pricing.gov}</p>
				</div>
				<button
					on:click={() => {
						apply();
					}}
					class="bg-ttmfRed text-white font-bold px-12 py-5 rounded justify-center max-md:flex max-md:w-full"
					>Apply Now</button>
			</div>
		</div>
	</div>
</div>
