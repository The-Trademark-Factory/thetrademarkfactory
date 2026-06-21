<script>
	import { searchResults_page } from '../../../data/global.json';
	import { X, Plus, Check, ChevronDown } from 'lucide-svelte';
	import { classes } from '$lib/utils/stores';
	import ClassesTips from './classesTips.svelte';

	export let resultsDetails, term;

	let classDescription = searchResults_page.classes_description;
	let groupedResults = {};
	let filterText = '';

	// Track which classes the user has manually opened — all collapsed by default
	let openClasses = {};

	// Track how many entries are visible per class — starts at 50, grows in steps of 50
	let visibleCounts = {};

	const VISIBLE_STEP = 50;

	resultsDetails.forEach((el) => {
		if (!groupedResults[el.gsClassNumber]) {
			groupedResults[el.gsClassNumber] = [];
		}
		groupedResults[el.gsClassNumber].push(el.description);
	});

	// Reactively compute filtered results per class and sort by count (most matches first)
	$: filteredGroupedResults = Object.fromEntries(
		Object.entries(groupedResults).map(([classNumber, descs]) => [
			classNumber,
			descs.filter((d) => d.toLowerCase().includes(filterText.toLowerCase()))
		])
	);

	$: sortedClassNumbers = Object.keys(filteredGroupedResults)
		.filter((classNumber) => filteredGroupedResults[classNumber].length > 0)
		.sort((a, b) => filteredGroupedResults[b].length - filteredGroupedResults[a].length);

	function toggleClass(classNumber) {
		const willOpen = !openClasses[classNumber];
		openClasses = { ...openClasses, [classNumber]: willOpen };
		// Reset the visible count each time the class is opened
		if (willOpen) {
			visibleCounts = { ...visibleCounts, [classNumber]: VISIBLE_STEP };
		}
	}

	function showMore(classNumber) {
		const current = visibleCounts[classNumber] ?? VISIBLE_STEP;
		visibleCounts = { ...visibleCounts, [classNumber]: current + VISIBLE_STEP };
	}

	function showLess(classNumber) {
		visibleCounts = { ...visibleCounts, [classNumber]: VISIBLE_STEP };
	}

	function toggleDescription(classNumber, description) {
		let currentClasses = $classes.find((c) => c.class === classNumber);
		if (!currentClasses) {
			classes.update((n) => [...n, { class: classNumber, descriptions: [description] }]);
			return;
		}

		const index = currentClasses.descriptions.indexOf(description);
		if (index === -1) {
			currentClasses.descriptions.push(description);
		} else {
			currentClasses.descriptions.splice(index, 1);
		}

		if (currentClasses.descriptions.length === 0) {
			classes.set($classes.filter((c) => c.class !== classNumber));
		} else {
			classes.set($classes);
		}
	}
</script>

<div class="space-y-4">
	<div class="flex flex-wrap justify-between items-center gap-6">
		<p>
			We found <span class="font-bold">{resultsDetails.length}</span> descriptions across
			<span class="font-bold">{Object.keys(groupedResults).length}</span>
			classes for
			<span class="font-bold">{term}</span>
		</p>
		{#if resultsDetails.length > 20}
			<div class="relative flex items-center gap-2 max-lg:w-full">
				<input
					type="text"
					placeholder="Filter by keyword"
					bind:value={filterText}
					class="border rounded p-2 w-full lg:w-72" />
				<button
					on:click={() => {
						filterText = '';
					}}
					class="absolute z-10 right-2 shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfLightGreen/50 hover:bg-ttmfRed"
					><X size="12" strokeWidth="3" /></button>
			</div>
		{/if}
	</div>

	{#if resultsDetails.length > 0}
		<ClassesTips />
	{/if}

	{#each sortedClassNumbers as classNumber (classNumber)}
		{@const descriptionsForClass = filteredGroupedResults[classNumber]}
		{@const isOpen = filterText.length > 0 || openClasses[classNumber]}
		{@const visibleCount = visibleCounts[classNumber] ?? VISIBLE_STEP}
		{@const visibleDescriptions = filterText.length > 0
			? descriptionsForClass
			: descriptionsForClass.slice(0, visibleCount)}
		{@const remainingCount = descriptionsForClass.length - visibleDescriptions.length}
		<div class="bg-white border-2 border-ttmfBeige rounded-lg overflow-hidden">
			<button
				type="button"
				on:click={() => toggleClass(classNumber)}
				class="w-full flex justify-between items-start gap-4 py-5 px-7 text-left hover:bg-ttmfBeige/20 transition-colors">
				<div class="space-y-1 flex-1 min-w-0">
					<p class="text-ttmfRed text-lg font-bold">
						Class {classNumber}
						<span class="text-sm font-normal text-ttmfBlack/60 ml-2">
							({descriptionsForClass.length}
							{descriptionsForClass.length === 1 ? 'option' : 'options'})
						</span>
					</p>
					<p class="text-ttmfBlack">
						{classDescription.find((el) => el.class_number === +classNumber)?.description ?? ''}
					</p>
				</div>
				<ChevronDown
					class="shrink-0 mt-1 text-ttmfRed transition-transform duration-200 {isOpen
						? 'rotate-180'
						: ''}"
					size="24" />
			</button>

			{#if isOpen}
				<div class="px-7 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
					{#each visibleDescriptions as description}
						<button
							class="w-full text-left flex items-center justify-between gap-2 rounded-md p-2 font-bold border-2 transition-all group hover:text-white
								{$classes.find((c) => c.class === classNumber)?.descriptions.includes(description)
								? 'text-ttmfRed border-ttmfRed/20 bg-ttmfRed/10 hover:bg-ttmfRed '
								: 'text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10 hover:bg-ttmfLightGreen '}"
							on:click={() => toggleDescription(classNumber, description)}>
							<span class="px-2 flex-1">{description}</span><span
								class="shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white group-hover:bg-white {$classes
									.find((c) => c.class === classNumber)
									?.descriptions.includes(description)
									? 'bg-ttmfRed group-hover:text-ttmfRed'
									: 'bg-ttmfLightGreen group-hover:text-ttmfLightGreen'}">
								{#if $classes
									.find((c) => c.class === classNumber)
									?.descriptions.includes(description)}
									<span class="group-hover:hidden">
										<Check size="12" strokeWidth="3" />
									</span>
									<span class="hidden group-hover:block">
										<X size="12" strokeWidth="3" />
									</span>
								{:else}
									<span class="transition-all group-hover:rotate-90">
										<Plus size="12" strokeWidth="3" />
									</span>
								{/if}
							</span>
						</button>
					{/each}
				</div>

				{#if filterText.length === 0 && (remainingCount > 0 || visibleCount > VISIBLE_STEP)}
					<div class="px-7 pb-5 flex flex-wrap gap-2">
						{#if remainingCount > 0}
							<button
								type="button"
								on:click={() => showMore(classNumber)}
								class="flex-1 flex justify-center items-center gap-2 rounded-md p-2 text-sm font-bold text-ttmfRed border-2 border-ttmfRed/20 bg-ttmfRed/5 hover:bg-ttmfRed hover:text-white transition-colors">
								Show {Math.min(VISIBLE_STEP, remainingCount)} more
								<ChevronDown size="16" />
							</button>
						{/if}
						{#if visibleCount > VISIBLE_STEP}
							<button
								type="button"
								on:click={() => showLess(classNumber)}
								class="flex-1 flex justify-center items-center gap-2 rounded-md p-2 text-sm font-bold text-ttmfLightGreen border-2 border-ttmfLightGreen/20 bg-ttmfLightGreen/5 hover:bg-ttmfLightGreen hover:text-white transition-colors">
								Show fewer
								<ChevronDown class="rotate-180" size="16" />
							</button>
						{/if}
					</div>
				{/if}
			{/if}
		</div>
	{/each}
</div>