<script>
	import PricingTabs from '$lib/components/PricingTabs.svelte';
	export let title;
</script>

<section class="max-w-screen-xl mx-auto py-16 max-2xl:px-6">
	{#if title}
		<h2 class="styleTitle text-center">
			{@html title}
		</h2>
	{/if}
	<div class={title ? 'mt-20' : ''}>
		<PricingTabs />
	</div>
</section>
