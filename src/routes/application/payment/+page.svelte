<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { details } from '$lib/utils/stores';
	import Sidebar from '$lib/application/sidebar.svelte';
	import StartOver from '$lib/application/startOver.svelte';

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
				<p class="text-xl font-bold text-ttmfRed">Personal Details</p>
				<div class="pt-4 space-y-2 text-lg">
					{#each formattedDetails as { key, value }}
						{#if value}
							<p><span class="font-bold">{key}</span>: {value}</p>
						{/if}
					{/each}
				</div>
			</div>
		</div>
		<div>
			<div class="sticky top-12">
				<Sidebar />
			</div>
		</div>
	</div>
</section>
