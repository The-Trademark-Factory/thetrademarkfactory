<script>
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let searchTerm;
</script>

<div class="relative flex max-sm:flex-wrap items-center gap-2 max-md:w-full">
	<input
		type="text"
		placeholder="Search by word"
		class="relative text-xl font-bold text-black placeholder:font-normal pl-14 pr-6 py-6 rounded w-[550px]"
		bind:value={searchTerm} />
	<div class="absolute left-4 max-sm:top-6">
		<Search color="#D34B44" />
	</div>
	<button
		on:click={() => goto(`/application/search?name=${searchTerm}`)}
		class="bg-ttmfRed text-white text-xl font-bold px-12 py-4 sm:py-6 rounded max-sm:w-full"
		>Search</button>
</div>
