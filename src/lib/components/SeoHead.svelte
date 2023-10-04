<script>
	export let pageDetails, type, slug;
</script>

<svelte:head>
	<title
		>{pageDetails.seo && pageDetails.seo.title
			? pageDetails.seo.title
			: pageDetails.data.title}</title>
	<meta
		name="description"
		content={pageDetails.seo && pageDetails.seo.description ? pageDetails.seo.description : ''} />
	<meta
		property="og:image"
		content="https://ttmf.com.au{pageDetails.seo && pageDetails.seo.image
			? pageDetails.seo.image
			: pageDetails.data?.image}" />
	<meta
		property="og:title"
		content={pageDetails.seo && pageDetails.seo.title
			? pageDetails.seo.title
			: pageDetails.data.title} />
	<meta
		property="og:description"
		content={pageDetails.seo && pageDetails.seo.description ? pageDetails.seo.description : ''} />
	{#if type}
		<meta property="og:type" content={type} />
	{/if}
	{#if slug}
		<meta property="og:url" content={`https://ttmf.com.au${slug}`} />
	{/if}
</svelte:head>
