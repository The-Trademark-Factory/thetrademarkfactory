<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';
	import Loader from '$lib/components/Loader.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '../lib/components/Footer.svelte';
	import Navigation from '../lib/components/Navigation.svelte';
	import NavigationApplication from '../lib/components/NavigationApplication.svelte';

	let isLoading = false;
	let destination;
	let searchTerm;

	beforeNavigate(({ to }) => {
		destination = to.route.id;
		searchTerm = to.url.search.split('=')[1];
		isLoading = true;
	});

	afterNavigate(() => {
		isLoading = false;
	});
</script>

{#if $page.route.id.includes('application')}
	<NavigationApplication />
{:else}
	<Navigation />
{/if}
{#if isLoading}
	<Loader {destination} {searchTerm} />
{/if}
<div in:fade={{ duration: 400 }} class="bg-ttmfBg">
	<slot />
</div>
<Footer />
