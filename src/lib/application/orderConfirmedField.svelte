<script>
	export let key, value;
</script>

{#if value}
	<div>
		<p class="capitalize font-semibold">{key}</p>
		<p class="pt-2">{value}</p>
	</div>
{/if}
