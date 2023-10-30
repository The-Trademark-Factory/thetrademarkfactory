<script>
	import { page } from '$app/stores';
	import { ChevronDownCircle } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = true;

	onMount(() => {
		const handleScroll = () => {
			const sidebarElement = document.getElementById('sidebar');
			if (sidebarElement) {
				const rect = sidebarElement.getBoundingClientRect();
				isVisible = rect.top > window.innerHeight;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if isVisible && !$page.route.id.includes('search')}
	<div
		transition:fly={{ y: 100 }}
		class="lg:hidden fixed bottom-0 w-full bg-ttmfRed py-4 text-center text-lg font-bold text-white z-40">
		<a href="#sidebar" class="flex items-center justify-center gap-4"
			>View your enquiry<ChevronDownCircle size="20" /></a>
	</div>
{/if}

<slot />
