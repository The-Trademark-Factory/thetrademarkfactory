<script>
	import { fly } from 'svelte/transition';
	export let team;

	let active = team[0].name;
</script>

<section class="max-w-screen-xl mx-auto lg:py-14 max-2xl:px-6 min-h-[1000px]">
	<div class="shadow-pricingShadow divide-y">
		{#each team as el}
			{#if el.name === active}
				<div class="bg-white rounded-lg py-10 lg:py-20 px-6 lg:px-16">
					<div in:fly={{ y: 40 }} class="grid lg:grid-cols-2 gap-12 lg:gap-24">
						<div>
							<h3 class="text-3xl font-bold">{el.name}</h3>
							<p class="font-bold text-ttmfRed pt-3">{el.position}</p>
							<div class="text-lg prose pt-8">
								{@html el.bio}
							</div>
						</div>
						<div>
							<img src={el.image} alt={el.name} class="w-full rounded-lg" />
						</div>
					</div>
				</div>
			{:else}
				<div class="bg-white rounded-lg">
					<button
						on:click={() => {
							active = el.name;
						}}
						class="py-6 px-6 lg:px-16 flex justify-between items-center w-full">
						<h3 class="text-xl font-bold">{el.name}</h3>
						<p class="font-bold text-ttmfRed">{el.position}</p>
					</button>
				</div>
			{/if}
		{/each}
	</div>
</section>
