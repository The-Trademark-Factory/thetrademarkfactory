<script>
	import { classes, details, international } from '$lib/utils/stores';
	import { Search, Image } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let placeholder, isSearchPage;

	let searchTerm;
	let showError = false;

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			resetAndGo();
		}
	}

	function resetAndGo() {
		if (searchTerm) {
			classes.set([]);
			details.set([]);
			international.set([]);
			localStorage.clear();
			goto(`/application/search?name=${searchTerm}`);
		} else {
			showError = true;
		}
	}
</script>

<div class="relative flex max-md:flex-wrap items-center gap-2 max-md:w-full">
	<input
		type="text"
		placeholder={placeholder ? placeholder : 'Search by word'}
		class="relative text-xl font-bold text-black placeholder:font-normal pl-14 lg:pr-52 py-6 rounded w-full lg:w-[600px]"
		required
		bind:value={searchTerm}
		on:keydown={handleKeydown} />
	<div class="absolute left-4 max-md:top-6">
		<Search color="#D34B44" />
	</div>
	{#if !isSearchPage}
		<div class="md:absolute md:right-48 lg:left-[26rem] top-5 lg:top-4 max-md:w-full">
			<a
				href="/application/search?type=logo"
				class="inline-flex gap-2 items-center max-lg:justify-center bg-ttmfBgLight text-ttmfDarkGreen px-5 py-3 rounded-md lg:rounded-full text-sm font-bold shadow-pricingShadow transition-all hover:bg-ttmfRed hover:text-white max-md:w-full"
				><span class="md:hidden">or</span><span class="shrink-0">upload a logo </span><Image
					size="20" /></a>
		</div>
	{/if}
	<button
		on:click={() => resetAndGo()}
		class="relative bg-ttmfRed text-white text-xl font-bold px-12 py-4 sm:py-6 rounded max-md:w-full max-md:mt-2 transition-all hover:bg-ttmfBlack"
		>Search</button>
</div>
{#if showError}
	<p class="text-ttmfRed pt-4 font-bold">Enter a word to search</p>
{/if}
