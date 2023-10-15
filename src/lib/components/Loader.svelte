<script>
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let destination, searchTerm;

	let word = searchTerm ? decodeURIComponent(searchTerm) : 'Searching...';
</script>

<div
	in:fly={{ easing: cubicOut, y: 100, duration: 300 }}
	out:fly={{ easing: cubicIn, y: -100, duration: 300 }}
	class="fixed h-screen w-full z-40 {destination === '/application/search'
		? 'bg-ttmfDarkGreen'
		: 'bg-ttmfBg'}">
	<section class="relative flex h-screen bg-youBgLBlue">
		<div class="mx-auto self-center p-6 text-center">
			{#if destination === '/application/search'}
				<div>
					<p class="text-5xl md:text-7xl lg:text-9xl font-bold text-white pb-8">
						{word}
					</p>
					<p
						class="text-lg lg:text-2xl font-semibold text-ttmfLightTextGreen animate-pulse uppercase tracking-widest">
						Getting your results
					</p>
				</div>
			{:else}
				<div class="animate-pulse">
					<svg xmlns="http://www.w3.org/2000/svg" width="400" viewBox="0 0 146 142" fill="none">
						<path
							class="draw-path"
							d="M37.6959 104.143C39.1053 104.938 40.7706 105.149 42.3339 104.73C43.8972 104.311 45.2339 103.296 46.0567 101.903L64.9549 69.1728C66.5005 70.0408 68.7359 71.2696 71.4117 72.5346L69.8528 114.989C69.8025 116.606 70.3941 118.176 71.4983 119.358C72.6026 120.54 74.1296 121.236 75.7458 121.296C77.362 121.355 78.936 120.772 80.124 119.675C81.3119 118.577 82.0171 117.054 82.0855 115.439L83.4993 76.9318C92.8535 79.1714 103.102 78.5037 109.065 68.1759C121.164 47.2223 90.9545 30.2297 85.3428 26.9988C83.7797 26.0988 82.9226 25.6595 82.6565 25.5236C80.0985 24.2832 76.3226 25.0044 74.6265 27.9417L57.3664 57.8343L38.8309 90.2974C38.8309 90.2974 35.9996 93.6848 32.1737 89.6761M2 50.4726C3.6471 57.0737 2.58701 160.526 97.7961 136.344C193.005 112.162 119.108 -34.6303 48.21 10.596C-22.6875 55.8223 37.0268 103.852 37.0268 103.852M81.3401 63.2658C80.4305 62.5761 79.3445 62.1575 78.2073 62.0585C75.817 61.0582 71.0753 58.5724 71.0753 58.5724L82.1613 39.3726C92.6159 45.9805 102.111 55.7401 98.4646 62.0556C95.9777 66.362 89.0293 65.9643 81.3401 63.2658Z"
							stroke="#F4F0ED"
							stroke-width="4"
							stroke-linecap="round" />
					</svg>
				</div>
			{/if}
		</div>
	</section>
</div>
