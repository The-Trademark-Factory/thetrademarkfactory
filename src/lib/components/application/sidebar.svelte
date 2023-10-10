<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { X } from 'lucide-svelte';
	import { searchTerm, classes } from '$lib/utils/stores';

	const feeFirstClass = searchResults_page.pricing.first_class;
	const feeAdditionalClass = searchResults_page.pricing.additional_class;
	const feeGovernment = searchResults_page.pricing.government_fee;
	let totalPrice = 0;
	let showDescriptions;

	const removeClassInStore = (classNumber) => {
		classes.update((currentClasses) => {
			const index = currentClasses.findIndex((c) => c.class === classNumber);
			return [...currentClasses.slice(0, index), ...currentClasses.slice(index + 1)];
		});
	};

	$: {
		const numClasses = $classes.length;
		if (numClasses > 0) {
			totalPrice =
				feeFirstClass + (numClasses - 1) * feeAdditionalClass + numClasses * feeGovernment;
		} else {
			totalPrice = 0;
		}
	}

	const getClassPrice = (index) => {
		return index === 0 ? feeFirstClass : feeAdditionalClass;
	};
</script>

<div class="bg-ttmfBeige px-5 py-6 rounded-lg">
	<div class="flex flex-wrap items-center gap-2 text-xl font-bold">
		<p>Trademark</p>
		<span
			class="shrink-0 text-base capitalize rounded-full px-2 border-2 text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10"
			>{$searchTerm}</span>
	</div>
	{#if $classes.length > 0}
		{#each $classes as el, index}
			<div class="bg-white p-5 rounded-lg mt-5">
				<div class="flex justify-between gap-2 border-b pb-3 mb-3">
					<p class="font-bold">Class {el.class}</p>
					<div class="inline-flex items-center gap-2">
						<p class="font-bold text-ttmfRed">AU${getClassPrice(index)}</p>
						<button
							on:click={() => removeClassInStore(el.class)}
							class="w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfRed"
							><X size="12" strokeWidth="3" /></button>
					</div>
				</div>
				<div class="flex justify-between gap-2 font-bold text-ttmfLightGreen/70">
					<p>IP Australia Fee</p>
					<p>AU${feeGovernment}</p>
				</div>
				<div class="flex flex-col divide-y">
					<div class="pt-5">
						<p class="font-bold text-ttmfGreen">{el.descriptions[0]}</p>
						{#if el.descriptions.length > 1 && showDescriptions !== el.class}
							<button
								on:click={() => {
									showDescriptions = el.class;
								}}
								class="text-sm underline underline-offset-4 decoration-dotted"
								>show all descriptions</button>
						{/if}
						{#if showDescriptions === el.class}
							<div class="space-y-1 pt-2">
								{#each el.descriptions.slice(1) as description}
									<p class="font-bold text-ttmfLightGreen">{description}</p>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
		<div class="flex justify-between gap-2 text-xl font-bold text-ttmfBlack py-6">
			<p>Total price</p>
			<p>AU${totalPrice}</p>
		</div>
		<button class="bg-ttmfRed text-white font-bold px-12 py-5 rounded w-full">Continue</button>
	{:else}
		<div class="py-6">
			<p class="text-ttmfCreme/50 font-bold">Search & Add classes to continue</p>
		</div>
		<button disabled class="bg-ttmfRed/50 text-white font-bold px-12 py-5 rounded w-full"
			>Continue</button>
	{/if}
</div>
