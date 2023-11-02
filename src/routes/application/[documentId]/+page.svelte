<script>
	export let data;

	$: ({
		applicationDetails,
		applicationType,
		customerDetails,
		lineItems,
		internationalTrademarks,
		stripe,
		total
	} = data.order ?? {});
</script>

{#if data.order}
	<h1>Order details</h1>
{:else}
	<p class="text-center">Order not found!</p>
{/if}
