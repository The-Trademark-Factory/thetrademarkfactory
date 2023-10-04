<script>
	import { onMount } from 'svelte';
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';
	import Svg from '$lib/components/Svg.svelte';
	import SearchWord from '$lib/components/SearchWord.svelte';
	export let title, search, aussie, scrolling_banner;

	onMount(() => {
		const scrollContainer = document.getElementById('scroll-container');

		let scrollAmount = 0;
		const scrollInterval = setInterval(() => {
			scrollContainer.scrollLeft += 1;
			scrollAmount += 1;

			if (scrollAmount >= scrollContainer.scrollWidth / 2) {
				scrollContainer.scrollLeft = 0;
				scrollAmount = 0;
			}
		}, 15);

		return () => {
			clearInterval(scrollInterval);
		};
	});
</script>

<section class="bg-ttmfDarkGreen text-white pt-20">
	<div class="relative overflow-hidden">
		<div class="absolute top-28 lg:top-20 xl:top-16 left-4 xl:left-headerOverflow w-full">
			<AnimatedSvg name="trademarkAnimated" />
		</div>
		<div class="relative z-10 max-w-screen-xl mx-auto py-28 px-6">
			<h1 class="text-6xl lg:text-8xl xl:text-9xl flex flex-col">
				<span class="font-bold">{title.title_above}</span><span class="sr-only">trademark</span
				><span class="font-bold pt-12 lg:pt-28 xl:pt-36">{title.title_below}</span>
			</h1>

			<div class="relative z-10 pt-14">
				<p class="text-xl">{search.title}</p>
				<div class="pt-4">
					<SearchWord />
				</div>
				<div class="flex items-center gap-4 pt-9">
					<Svg name="australia" />
					<div>
						<p class="text-lg">{aussie.title}</p>
						<p class="text-sm text-ttmfLightTextGreen">{aussie.subtitle}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="bg-ttmfRed py-6">
	<div id="scroll-container" class="flex gap-6 overflow-x-hidden whitespace-nowrap">
		{#each scrolling_banner as el}
			<p class="font-bold text-white text-lg">{el.title}</p>
		{/each}
	</div>
</div>
