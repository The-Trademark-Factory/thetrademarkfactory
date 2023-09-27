<script>
	import PricingTabs from '$lib/components/PricingTabs.svelte';
	export let title;
</script>

<section class="max-w-screen-xl mx-auto py-16 lg:py-28 max-2xl:px-6">
	<h2 class="styleTitle text-center">
		{@html title}
	</h2>
	<div class="mt-20">
		<PricingTabs />
	</div>
</section>
