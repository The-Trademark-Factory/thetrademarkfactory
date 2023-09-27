<script>
	import SearchWord from '$lib/components/SearchWord.svelte';
	import Svg from '../../../../src/lib/components/Svg.svelte';
	export let title;
</script>

<section class="max-w-screen-xl mx-auto py-16 max-2xl:px-6">
	<div class="relative">
		<h2 class="styleTitle text-center">
			{@html title}
		</h2>
		<div class="absolute right-52 top-10">
			<Svg name="search-cta-shape" />
		</div>
	</div>
	<div class="pt-10 flex flex-col items-center">
		<SearchWord />
	</div>
</section>
