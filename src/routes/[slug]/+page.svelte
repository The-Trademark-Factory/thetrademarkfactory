<script>
	import { transparentMenu } from '$lib/utils/stores';
	import { onDestroy, onMount } from 'svelte';
	import { Bookshop, trackBookshopLiveData } from '@bookshop/sveltekit-bookshop';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';

	export let data;
	let content;

	$: {
		content = data.data;
		transparentMenu.set(content.menu_transparent ?? false);
	}

	onMount(async () => {
		onCloudCannonChanges((newProps) => (content = trackBookshopLiveData(newProps)));
	});
	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>

<svelte:head>
	<title>{content.seo.title}</title>
	<meta name="description" content={content.seo.description} />
	<meta property="og:image" content={content.seo.image} />
</svelte:head>

<Bookshop shared="page" content_blocks={content.content_blocks} />
