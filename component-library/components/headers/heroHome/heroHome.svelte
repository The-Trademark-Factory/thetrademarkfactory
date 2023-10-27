<script>
	import { onMount } from 'svelte';
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';
	import Svg from '$lib/components/Svg.svelte';
	import SearchWord from '$lib/components/SearchWord.svelte';
	export let title, search, aussie, scrolling_banner;

	let visible = false;
	let scrollContainer;

	onMount(() => {
		let position = 0;

		const step = () => {
			if (!scrollContainer) return;
			const firstChild = scrollContainer.firstElementChild;

			if (!firstChild) return;

			const offset = firstChild.offsetWidth;
			position += 1;

			if (position > offset) {
				scrollContainer.appendChild(firstChild);
				position -= offset;
			}

			scrollContainer.style.transform = `translateX(-${position}px)`;
			requestAnimationFrame(step);
		};

		step();
	});
</script>

<section
	data-intersect
	on:intersect={(e) => (visible = e.detail.isIntersecting)}
	class="bg-ttmfDarkGreen text-white pt-14">
	<div class="relative overflow-hidden">
		<div class="absolute top-28 md:top-16 lg:top-20 xl:top-16 left-4 xl:left-headerOverflow w-full">
			<AnimatedSvg name="trademarkAnimated" {visible} />
		</div>
		<div class="relative z-10 max-w-screen-xl mx-auto py-28 px-6">
			<h1 class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col">
				<span class="font-bold">{title.title_above}</span><span class="sr-only">trademark</span
				><span class="font-bold pt-16 md:pt-20 lg:pt-28 xl:pt-36">{title.title_below}</span>
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
<div class="bg-ttmfRed py-6 overflow-hidden">
	<div bind:this={scrollContainer} class="flex whitespace-nowrap pb-1">
		{#each [...scrolling_banner, ...scrolling_banner] as el}
			<p class="text-white font-bold text-lg inline-flex items-center gap-6 px-4">
				{el.title}
			</p>
		{/each}
	</div>
</div>
