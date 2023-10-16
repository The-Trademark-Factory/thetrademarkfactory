<script>
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	export let title, subtitle, background;

	let visible = false;
	let showAnimation = true;

	beforeNavigate(() => {
		showAnimation = false;
	});

	afterNavigate(() => {
		showAnimation = true;
	});
</script>

<section
	data-intersect
	on:intersect={(e) => (visible = e.detail.isIntersecting)}
	class="relative bg-ttmfDarkGreen text-white">
	<div class="relative z-10 max-w-screen-xl mx-auto pt-44 lg:pt-52 lg:pb-28 px-6">
		<h1 class="text-6xl lg:text-8xl xl:text-9xl font-bold flex flex-col">
			{title}
		</h1>
		{#if subtitle}
			<p class="text-4xl font-arkina text-ttmfRed pt-9">{subtitle}</p>
		{/if}
	</div>
	{#if showAnimation && background.animation}
		<div
			class="lg:absolute right-0 {background.align_bottom
				? 'bottom-0'
				: 'bottom-20 max-lg:pb-12 max-lg:pt-12'}">
			<AnimatedSvg name={background.animation} {visible} />
		</div>
	{:else if !background.animation && background.image}
		<div
			class="lg:absolute right-0 {background.align_bottom
				? 'bottom-0'
				: 'bottom-20 max-lg:pb-12 max-lg:pt-12'}">
			<img src={background.image} alt={background.alt ?? ''} />
		</div>
	{/if}
</section>
