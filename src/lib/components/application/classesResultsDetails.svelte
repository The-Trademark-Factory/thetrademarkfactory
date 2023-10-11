<script>
	import { classes } from '$lib/utils/stores';
	import { Plus, Check } from 'lucide-svelte';

	export let resultsDetails;
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

	$: console.log(resultsDetails);
</script>

<div class="space-y-4">
	<div class="flex items-center gap-2 mb-4">
		<input
			type="text"
			placeholder="Filter descriptions"
			bind:value={filterText}
			class="border rounded p-2" />
		<button on:click={(filterText = '')} class="bg-red-500 text-white p-2 rounded"
			>Clear Filter</button>
	</div>
	{#each Object.keys(groupedResults) as classNumber}
		{#if groupedResults[classNumber].filter((desc) => desc
				.toLowerCase()
				.includes(filterText.toLowerCase())).length > 0}
			<div class="bg-white border-2 border-ttmfBeige rounded-lg py-5 px-7">
				<div>
					<p class="text-ttmfRed text-lg font-bold">Class {classNumber}</p>
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
			</div>
		{/if}
	{/each}
</div>
