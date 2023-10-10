<script>
	import { classes } from '$lib/utils/stores';
	import { Plus, Check } from 'lucide-svelte';

	export let resultsDetails;
	let groupedResults = {};

	resultsDetails.forEach((el) => {
		if (!groupedResults[el.gsClassNumber]) {
			groupedResults[el.gsClassNumber] = [];
		}
		groupedResults[el.gsClassNumber].push(el.description);
	});

	const toggleClassInStore = (classNumber, descriptions) => {
		classes.update((currentClasses) => {
			const index = currentClasses.findIndex((c) => c.class === classNumber);
			if (index !== -1) {
				return [...currentClasses.slice(0, index), ...currentClasses.slice(index + 1)];
			} else {
				return [...currentClasses, { class: classNumber, descriptions }];
			}
		});
	};
</script>

<div class="space-y-4">
	{#each Object.keys(groupedResults) as classNumber}
		<div class="flex justify-between gap-6 bg-white border-2 border-ttmfBeige rounded-lg py-5 px-7">
			<div>
				<p class="text-ttmfRed text-lg font-bold">Class {classNumber}</p>
				<div class="pt-1">
					{#each groupedResults[classNumber] as description}
						<p>{description}</p>
					{/each}
				</div>
			</div>
			<div class="pt-1 shrink-0">
				<button
					on:click={() => toggleClassInStore(classNumber, groupedResults[classNumber])}
					class="shrink-0 inline-flex items-center rounded-full p-2 font-bold border-2 {$classes.some(
						(c) => c.class === classNumber
					)
						? 'text-ttmfRed border-ttmfRed/20 bg-ttmfRed/10'
						: 'text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10'}">
					<span class="px-2">Class {classNumber}</span>
					<span
						class="w-5 h-5 rounded-full flex flex-col justify-center items-center text-white {$classes.some(
							(c) => c.class === classNumber
						)
							? 'bg-ttmfRed'
							: 'bg-ttmfLightGreen'}">
						{#if $classes.some((c) => c.class === classNumber)}
							<Check size="12" strokeWidth="3" />
						{:else}
							<Plus size="12" strokeWidth="3" />
						{/if}
					</span>
				</button>
			</div>
		</div>
	{/each}
</div>
