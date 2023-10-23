<script>
	import { classes, details, international } from '$lib/utils/stores';
	import { Search, Image } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let placeholder, isSearchPage;

	let searchTerm;

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			resetAndGo();
		}
	}

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
		class="relative text-xl font-bold text-black placeholder:font-normal pl-14 pr-52 py-6 rounded w-full lg:w-[600px]"
		required
		bind:value={searchTerm}
		on:keydown={handleKeydown} />
	<div class="absolute left-4 max-sm:top-6">
		<Search color="#D34B44" />
	</div>
	{#if !isSearchPage}
		<div class="absolute left-[26rem] top-4">
			<a
				href="/application/search?type=logo"
				class="inline-flex gap-2 items-center bg-ttmfBgLight text-ttmfDarkGreen px-5 py-3 rounded-full text-sm font-bold shadow-pricingShadow transition-all hover:bg-ttmfRed hover:text-white"
				>Upload a logo <Image size="20" /></a>
		</div>
	{/if}
	<button
		on:click={() => resetAndGo()}
		class="bg-ttmfRed text-white text-xl font-bold px-12 py-4 sm:py-6 rounded max-sm:w-full"
		>Search</button>
</div>
