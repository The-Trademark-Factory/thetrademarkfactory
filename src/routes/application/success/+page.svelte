<script>
	import { onMount } from 'svelte';
	import { searchTerm, classes, details, international } from '$lib/utils/stores';

	onMount(() => {
		localStorage.clear();
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
	});
</script>

<section class="max-w-screen-xl mx-auto scroll-mt-32 max-2xl:px-6">
	<p class="text-center py-20">Success, thank you for your order!</p>
</section>
