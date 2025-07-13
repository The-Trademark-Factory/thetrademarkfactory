<script>
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';
	import { beforeNavigate } from '$app/navigation';
	import Svg from '$lib/components/Svg.svelte';

	export let title, steps;

	let visible = false;
	let showAnimation = true;

	beforeNavigate(() => {
		showAnimation = false;
	});
</script>

<section
	data-intersect
	on:intersect={(e) => (visible = e.detail.isIntersecting)}
	class="max-w-screen-xl mx-auto py-12 lg:py-28 px-6">
	<h2 class="styleTitle text-center">
		{@html title}
	</h2>
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-20 xl:gap-12 pt-16 lg:pt-36">
		{#each steps as el, i}
			<div class="relative {i % 2 === 0 ? '' : 'xl:pt-40 pl-2'}">
				{#if !el.last_step}
					{#if showAnimation}
						<div
							class="max-xl:hidden absolute {i % 2 === 0 ? '-top-16 left-10' : '-top-24 left-20'}">
							<AnimatedSvg name={i % 2 === 0 ? 'step-top' : 'step-bottom'} {visible} />
						</div>
					{/if}
				{/if}
				<div class="relative text-xl text-ttmfRed font-bold font-arkina">
					<span class="pl-5">
						{el.step}
					</span>
					{#if showAnimation}
						<div class="max-lg:hidden absolute left-0 -top-4 w-14">
							<AnimatedSvg name="round-number" {visible} />
						</div>
					{/if}
					<div class="lg:hidden absolute left-0 -top-4 w-14">
						<Svg name="round-number" />
					</div>
				</div>
				<p class="text-xl font-bold text-ttmfBlack py-8 pr-6">{el.title_step}</p>
				<img
					src={el.image}
					alt="{el.title} Screenshot"
					width="235"
					height="235"
					class="object-contain" />
			</div>
		{/each}
	</div>
</section>
