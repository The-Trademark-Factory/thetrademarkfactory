<script>
	import { goto } from '$app/navigation';

	let searchTerm;
</script>

<input
	type="text"
	placeholder="Search"
	class="border-2 border-black text-xl px-6 py-2"
	bind:value={searchTerm} />
<button
	on:click={() => goto(`/application/search?name=${searchTerm}`)}
	class="bg-black text-white text-xl px-6 py-2">Search</button>
