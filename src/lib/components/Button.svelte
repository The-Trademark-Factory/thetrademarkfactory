<script>
	export let title, url, style;
</script>

{#if style === 'white'}
	<a href={url} class="bg-white text-ttmfBlack font-bold px-12 py-5 rounded">{title}</a>
{:else}
	<a href={url} class="bg-ttmfRed text-white font-bold px-12 py-5 rounded">{title}</a>
{/if}
