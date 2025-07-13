<script>
	import { default_seo } from '../../../data/global.json';
	export let pageDetails;
</script>

<svelte:head>
	<title
		>{pageDetails.seo && pageDetails.seo.title ? pageDetails.seo.title : default_seo.title}</title>
	<meta
		name="description"
		content={pageDetails.seo && pageDetails.seo.description
			? pageDetails.seo.description
			: default_seo.description} />
	<meta
		property="og:image"
		content="https://ttmf.com.au{pageDetails.seo && pageDetails.seo.image
			? pageDetails.seo.image
			: default_seo.image}" />
	<meta
		property="og:title"
		content={pageDetails.seo && pageDetails.seo.title
			? pageDetails.seo.title
			: default_seo.title} />
	<meta
		property="og:description"
		content={pageDetails.seo && pageDetails.seo.description
			? pageDetails.seo.description
			: default_seo.description} />
</svelte:head>
