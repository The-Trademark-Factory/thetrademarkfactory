<script>
	import {
		searchType,
		searchLogo,
		searchTerm,
		classes,
		details,
		international
	} from '$lib/utils/stores';
	import { deleteImage } from '$lib/utils/indexedDB';
	import { goto } from '$app/navigation';
	import { Undo2 } from 'lucide-svelte';

	async function startOver() {
		searchTerm.set('');
		searchType.set('word');
		searchLogo.set('');
		classes.set([]);
		details.set([]);
		international.set([]);
		localStorage.clear();
		deleteImage();
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
		><Undo2 size="12" strokeWidth="3" /></span
	>Start Over</button>
