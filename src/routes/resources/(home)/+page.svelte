<script>
	import { resources_page } from '../../../../data/global.json';
	import HeroDefault from '../../../../component-library/components/headers/heroDefault/heroDefault.svelte';
	export let data;

	let background = { animation: 'resources', align_bottom: true };
</script>

<HeroDefault title={resources_page.title} subtitle={resources_page.subtitle} {background} />

<section class="max-w-screen-xl mx-auto py-12">
	<div class="flex flex-col divide-y border-t border-b">
		{#each data.articles as el}
			<a
				href="/resources/{el.slug}"
				class="flex max-lg:flex-wrap items-center gap-6 justify-between py-14 px-6 group transition-all hover:bg-white hover:shadow-pricingShadow rounded-lg">
				<div class=" {el.data.image ? 'flex max-lg:flex-wrap items-center gap-6 lg:gap-20' : ''}">
					{#if el.data.image}
						<img
							src={el.data.image}
							alt=""
							class="w-28 h-28 object-cover rounded-lg shadow-pricingShadow" />
					{/if}
					<h2 class="text-xl font-bold">{el.data.title}</h2>
				</div>
				<div class="flex max-lg:flex-wrap items-center gap-6 lg:gap-20">
					<p class="w-80">{@html el.content_html.slice(0, 100) + '...'}</p>
					<span
						class="max-md:hidden shrink-0 w-24 h-24 rounded-full ring-2 ring-black flex items-center justify-center text-sm font-bold transition-all group-hover:bg-ttmfRed group-hover:text-white group-hover:ring-0"
						>Read More</span>
				</div>
			</a>
		{/each}
	</div>
</section>
