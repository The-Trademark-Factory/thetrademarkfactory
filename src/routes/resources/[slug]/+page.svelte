<script>
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: pageData = data;
	$: pageDetails = pageData.pageDetails;
	$: frontMatter = pageDetails.data;

	$: date = frontMatter.date || new Date();
	$: dateString = date.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<SeoHead
	{pageDetails}
	type="article"
	author={true}
	date={true}
	slug="resources/{pageDetails.slug}" />

<div class="bg-ttmfDarkGreen py-40" />
<div class="max-w-screen-xl mx-auto bg-white rounded-3xl py-16 px-28 shadow-pricingShadow -mt-28">
	<h1 class="text-5xl font-bold">{pageDetails.data.title}</h1>
</div>
<div class="max-w-screen-xl mx-auto py-20">
	<div class="max-w-4xl mx-auto prose prose-p:text-lg">
		{@html pageDetails.content_html}
	</div>
</div>
