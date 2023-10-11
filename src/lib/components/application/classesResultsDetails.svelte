<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { X } from 'lucide-svelte';
	import { classes } from '$lib/utils/stores';
	import { Plus, Check } from 'lucide-svelte';

	export let resultsDetails, term;
	let classDescription = searchResults_page.classes_description;
	let groupedResults = {};
	let filterText = '';

	resultsDetails.forEach((el) => {
		if (!groupedResults[el.gsClassNumber]) {
			groupedResults[el.gsClassNumber] = [];
		}
		groupedResults[el.gsClassNumber].push(el.description);
	});

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
			We found <span class="font-bold">{resultsDetails.length}</span> classes for
			<span class="font-bold">{term}</span>
		</p>
		{#if resultsDetails.length > 20}
			<div class="relative flex items-center gap-2">
				<input
					type="text"
					placeholder="Filter by keyword"
					bind:value={filterText}
					class="border rounded p-2 w-72" />
				<button
					on:click={() => {
						filterText = '';
					}}
					class="absolute z-10 right-2 shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfLightGreen/50 hover:bg-ttmfRed"
					><X size="12" strokeWidth="3" /></button>
			</div>
		{/if}
	</div>
	{#each Object.keys(groupedResults) as classNumber}
		{#if groupedResults[classNumber].filter((desc) => desc
				.toLowerCase()
				.includes(filterText.toLowerCase())).length > 0}
			<div class="bg-white border-2 border-ttmfBeige rounded-lg py-5 px-7">
				<div>
					<div class="space-y-1">
						<p class="text-ttmfRed text-lg font-bold">Class {classNumber}</p>
						<p class="text-ttmfBlack text-sm">
							{classDescription.find((el) => el.class_number === +classNumber)?.description ?? ''}
						</p>
					</div>
				</div>
				<div class="flex flex-wrap items-center gap-2 pt-3">
					{#each groupedResults[classNumber].filter((desc) => desc
							.toLowerCase()
							.includes(filterText.toLowerCase())) as description}
						<button
							class="text-left flex items-center rounded-full text-sm p-1 font-bold border-2
						{$classes.find((c) => c.class === classNumber)?.descriptions.includes(description)
								? 'text-ttmfRed border-ttmfRed/20 bg-ttmfRed/10'
								: 'text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10'}"
							on:click={() => toggleDescription(classNumber, description)}>
							<span class="px-2">{description}</span><span
								class="shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white {$classes
									.find((c) => c.class === classNumber)
									?.descriptions.includes(description)
									? 'bg-ttmfRed'
									: 'bg-ttmfLightGreen'}">
								{#if $classes
									.find((c) => c.class === classNumber)
									?.descriptions.includes(description)}
									<Check size="12" strokeWidth="3" />
								{:else}
									<Plus size="12" strokeWidth="3" />
								{/if}
							</span>
						</button>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</div>
