<script>
	import { classes, details, international } from '$lib/utils/stores';
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let placeholder;

	let searchTerm;

	function resetAndGo() {
		classes.set([]);
		details.set([]);
		international.set([]);
		localStorage.clear();
		goto(`/application/search?name=${searchTerm}`);
	}
</script>

<div class="relative flex max-sm:flex-wrap items-center gap-2 max-md:w-full">
	<input
		type="text"
		placeholder={placeholder ? placeholder : 'Search by word'}
		class="relative text-xl font-bold text-black placeholder:font-normal pl-14 pr-6 py-6 rounded w-full lg:w-[550px]"
		bind:value={searchTerm} />
	<div class="absolute left-4 max-sm:top-6">
		<Search color="#D34B44" />
	</div>
	<button
		on:click={() => resetAndGo()}
		class="bg-ttmfRed text-white text-xl font-bold px-12 py-4 sm:py-6 rounded max-sm:w-full"
		>Search</button>
</div>
