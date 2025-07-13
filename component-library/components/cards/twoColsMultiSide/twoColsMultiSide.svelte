<script>
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';
	import { beforeNavigate } from '$app/navigation';

	export let title, description, media, cards;

	let visible = false;
	let showAnimation = true;

	beforeNavigate(() => {
		showAnimation = false;
	});
</script>

<section
	data-intersect
	on:intersect={(e) => (visible = e.detail.isIntersecting)}
	class="relative max-w-8xl mx-auto">
	<div
		class="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 pt-6 lg:pt-16 pb-6 lg:pb-24 max-2xl:px-6 max-lg:gap-10">
		<div class="lg:pr-24">
			<h2 class="styleTitle">
				{@html title}
			</h2>
			<div class="pt-6 text-xl prose">
				{@html description}
			</div>
		</div>
		<div class="grid md:grid-cols-2 gap-8">
			{#each cards as el}
				<div class="py-6 px-7 bg-white rounded-2xl shadow-pricingShadow">
					<img src={el.icon} alt={el.title_card} class="w-14 h-14" />
					<h3 class="text-xl font-bold py-4">
						{el.title_card}
					</h3>
					<p>{el.description_card}</p>
				</div>
			{/each}
		</div>
	</div>
	{#if showAnimation && media.animation}
		<div class="max-lg:hidden absolute lg:-left-20 2xl:left-20 bottom-0">
			<AnimatedSvg name={media.animation} {visible} />
		</div>
	{:else if !media.animation && media.image}
		<div class="max-lg:hidden absolute lg:-left-20 2xl:left-20 bottom-0">
			<img src={media.image} alt={media.alt ?? ''} />
		</div>
	{/if}
</section>
