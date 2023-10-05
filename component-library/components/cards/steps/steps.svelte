<script>
	import Svg from '$lib/components/Svg.svelte';
	export let title, steps;
</script>

<section class="max-w-screen-xl mx-auto py-12 lg:py-28 px-6">
	<h2 class="styleTitle text-center">
		{@html title}
	</h2>
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-20 xl:gap-12 pt-16 lg:pt-36">
		{#each steps as el, i}
			<div class="relative {i % 2 === 0 ? '' : 'xl:pt-40 pl-2'}">
				{#if !el.last_step}
					<div class="max-xl:hidden absolute {i % 2 === 0 ? '-top-16 left-10' : '-top-24 left-20'}">
						<Svg name={i % 2 === 0 ? 'step-top' : 'step-bottom'} />
					</div>
				{/if}
				<div class="relative text-xl text-ttmfRed font-bold font-arkina">
					<span class="pl-5">
						{el.step}
					</span>
					<div class="absolute left-0 -top-4 w-14">
						<Svg name="round-number" />
					</div>
				</div>
				<p class="text-xl font-bold text-ttmfBlack py-8 pr-6">{el.title}</p>
				<img src={el.image} alt={el.title} />
			</div>
		{/each}
	</div>
</section>
