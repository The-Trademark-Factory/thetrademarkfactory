<script>
	import { onDestroy, onMount } from 'svelte';
	import { Bookshop, trackBookshopLiveData } from '@bookshop/sveltekit-bookshop';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	let content = data.content.data;

	onMount(async () => {
		onCloudCannonChanges((newProps) => (content = trackBookshopLiveData(newProps)));
	});
	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>

<SeoHead pageDetails={content} />

<Bookshop shared="page" content_blocks={content.content_blocks} />
