<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { searchTerm, classes, details } from '$lib/utils/stores';
	import Sidebar from '$lib/application/sidebar.svelte';
	import StartOver from '$lib/application/startOver.svelte';

	let terms = false;

	$: formattedDetails = Object.entries($details).map(([key, value]) => {
		const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
		return { key: formattedKey, value };
	});
</script>

<section class="relative max-w-screen-xl mx-auto py-12 lg:py-24 max-2xl:px-6">
	<StartOver />
	<div class="grid lg:grid-cols-3 gap-12 pt-11">
		<div class="lg:col-span-2">
			<p class="text-3xl font-bold">{searchResults_page.payment.title}</p>
			<div class="border-t-2 py-6 mt-4">
				<p class="text-xl font-bold text-ttmfRed">Trademark Details</p>
				<div class="pt-4 space-y-2 text-lg">
					<p><span class="font-bold">Trademark</span>: {$searchTerm}</p>
					<p>
						<span class="font-bold">Classes</span>:
						<span class="inline-flex flex-wrap">
							{#each $classes as el, index}
								<span
									>{el.class}
									<span class="italic">({el.descriptions.length} descriptions)</span></span>
								{index < $classes.length - 1 ? ',' : ''}&nbsp;
							{/each}
						</span>
					</p>
				</div>
			</div>
			<div class="border-t-2 py-6 mt-4">
				<p class="text-xl font-bold text-ttmfRed">Personal Details</p>
				<div class="pt-4 space-y-2 text-lg">
					{#each formattedDetails as { key, value }}
						{#if value}
							<p><span class="font-bold">{key}</span>: {value}</p>
						{/if}
					{/each}
				</div>
				<div class="flex border-t-2 py-6 mt-6">
					<input
						type="checkbox"
						bind:checked={terms}
						class="form-checkbox text-red-600 h-5 w-5 mt-1 shrink-0" />
					<label for="terms" class="ml-4 text-ttmfDarkGreen prose"
						>{@html searchResults_page.payment.terms}</label>
				</div>
			</div>
		</div>
		<div>
			<div>
				<Sidebar {terms} />
			</div>
		</div>
	</div>
</section>
