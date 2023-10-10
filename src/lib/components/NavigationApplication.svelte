<script>
	import { Check } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const nav = [
		{ step_title: 'Search Trademark', url: '/application/search' },
		{ step_title: 'Select Classes', url: '/application/classes' },
		{ step_title: 'Personal Details', url: '/application/details' },
		{ step_title: 'International Trademarks', url: '/application/international' },
		{ step_title: 'Payment' }
	];

	let y = 0;

	$: currentStep = nav.findIndex((el) => el.url === $page.route.id) + 1;
</script>

<svelte:window bind:scrollY={y} />
<nav class="bg-ttmfDarkGreen py-6">
	<div class="max-w-screen-2xl mx-auto max-2xl:px-6">
		<div class="flex justify-between items-center">
			<p class="text-4xl text-white">TTMF</p>
			<div class="mx-auto flex items-center gap-12 font-bold text-lg">
				{#each nav as el, i}
					<button
						on:click={() => (i + 1 < currentStep ? goto(el.url) : null)}
						class="inline-flex items-center gap-2 {i + 1 < currentStep
							? 'text-red-500'
							: $page.route.id === el.url
							? 'text-white'
							: 'text-white/50'}"
						>{el.step_title}
						{#if i + 1 < currentStep}
							<span
								class="w-6 h-6 rounded-full flex flex-col justify-center items-center bg-ttmfRed text-white">
								<Check size="12" strokeWidth="3" />
							</span>
						{:else}
							<span
								class="w-6 h-6 rounded-full flex flex-col justify-center items-center bg-ttmfGreen text-white text-xs"
								>{i + 1}</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
</nav>
