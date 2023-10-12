<script>
	import { searchTerm, classes, details, international } from '$lib/utils/stores';
	import { goto } from '$app/navigation';
	import { ChevronLeft } from 'lucide-svelte';

	function startOver() {
		searchTerm.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
		localStorage.clear();
		goto('/application/search');
	}
</script>

<button
	on:click={() => {
		startOver();
	}}
	class="inline-flex gap-2 items-center font-bold"
	><span
		class="w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfRed"
		><ChevronLeft size="12" strokeWidth="3" /></span
	>Start Over</button>
