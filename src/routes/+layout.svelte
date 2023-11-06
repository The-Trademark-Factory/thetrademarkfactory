<script>
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';
	import Loader from '$lib/components/Loader.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import NavigationApplication from '$lib/components/NavigationApplication.svelte';

	let isLoading = false;
	let destination;
	let searchTerm;

	onMount(() => {
		const intersectionObserver = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) =>
					entry.target.dispatchEvent(new CustomEvent('intersect', { detail: entry }))
				),
			{ root: null, rootMargin: '0px', threshold: 0.5 }
		);

		const mutationObserver = new MutationObserver((mutations) =>
			mutations.forEach((m) => {
				m.addedNodes.forEach((node) => {
					if (
						node instanceof HTMLElement &&
						node.dataset.intersect != null &&
						node.dataset.intersectInitialized == null
					) {
						intersectionObserver.observe(node);
						node.dataset.intersectInitialized = 'true';
					}
				});
				m.removedNodes.forEach((node) => {
					if (node instanceof HTMLElement) {
						intersectionObserver.unobserve(node);
					}
				});
			})
		);

		[...document.querySelectorAll('[data-intersect]')].forEach((node) => {
			intersectionObserver.observe(node);
			node.dataset.intersectInitialized = 'true';
		});

		mutationObserver.observe(document.body, { childList: true, subtree: true });

		return () => {
			mutationObserver.disconnect();
			intersectionObserver.disconnect();
		};
	});

	beforeNavigate(({ to }) => {
		if (to) {
			destination = to.route.id;
			searchTerm = to.url.search.split('=')[1];
			isLoading = true;
		}
	});

	afterNavigate(() => {
		isLoading = false;
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-4ENS64NWL6"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-4ENS64NWL6');
	</script>
</svelte:head>

{#if $page?.route?.id?.includes('application')}
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
