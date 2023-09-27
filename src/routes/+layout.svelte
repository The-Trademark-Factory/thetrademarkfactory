<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../app.css';
	import { fade } from 'svelte/transition';

	export let data;
	let isLoading = false;

	beforeNavigate(() => {
		isLoading = true;
	});

	afterNavigate(() => {
		isLoading = false;
	});
</script>

{#key data.url}
	<div in:fade={{ duration: 400 }} class="bg-ttmfBg">
		<slot />
	</div>
{/key}
