<script>
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let searchTerm;
</script>

<div class="flex items-center gap-2">
	<input
		type="text"
		placeholder="Search by word"
		class="relative text-xl font-bold text-black placeholder:font-normal pl-14 pr-6 py-6 rounded w-[550px]"
		bind:value={searchTerm} />
	<div class="absolute left-4">
		<Search color="#D34B44" />
	</div>
	<button
		on:click={() => goto(`/application/search?name=${searchTerm}`)}
		class="bg-ttmfRed text-white text-xl font-bold px-12 py-6 rounded">Search</button>
</div>
