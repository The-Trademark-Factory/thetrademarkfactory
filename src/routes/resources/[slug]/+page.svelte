<script>
	import { ChevronLeft } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: pageData = data;
	$: pageDetails = pageData.pageDetails;
	$: frontMatter = pageDetails.data;

	console.log(data);
</script>

<SeoHead pageDetails={frontMatter} />

<div class="bg-ttmfDarkGreen py-40" />
<div class="-mt-36 max-w-screen-xl mx-auto">
	<a href="/resources" class="inline-flex gap-2 items-center font-bold mb-6 text-white"
		><span class="w-5 h-5 rounded-full flex flex-col justify-center items-center bg-ttmfRed"
			><ChevronLeft size="12" strokeWidth="3" /></span
		><span class="hover:underline underline-offset-4">Back to Resources</span></a>
	<div class=" bg-white rounded-3xl py-16 px-28 shadow-pricingShadow">
		<h1 class="text-5xl font-bold">{pageDetails.data.title}</h1>
	</div>
</div>
<div class="max-w-screen-xl mx-auto py-20">
	<div class="max-w-4xl mx-auto prose prose-p:text-lg">
		{@html pageDetails.content_html}
	</div>
</div>
