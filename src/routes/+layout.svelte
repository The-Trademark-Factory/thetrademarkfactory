<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Footer from '../lib/components/Footer.svelte';
	import Navigation from '../lib/components/Navigation.svelte';

	export let data;
	let isLoading = false;

	beforeNavigate(() => {
		isLoading = true;
	});

	afterNavigate(() => {
		isLoading = false;
	});
</script>

<Navigation />
{#key data.url}
	<div in:fade={{ duration: 400 }} class="bg-ttmfBg">
		<slot />
	</div>
{/key}
<Footer />
