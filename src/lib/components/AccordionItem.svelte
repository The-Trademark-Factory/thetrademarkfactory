<script>
	import { slide } from 'svelte/transition';

	export let title = '';
	export let active = false;
	export let onClick = () => {};
</script>

<div class="bg-white rounded-2xl px-8">
	<button class="py-6 flex justify-between items-center w-full text-left group" on:click={onClick}>
		<span class="text-xl font-bold text-ttmfRed transition-all group-hover:text-ttmfBlack"
			>{title}</span>
		{#if active}
			<div class="flex items-center justify-center gap-2 text-ttmfRed group-hover:text-ttmfBlack">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-7 h-7">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
		{:else}
			<div class="flex items-center justify-center text-ttmfRed group-hover:text-ttmfBlack">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-7 h-7">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
				</svg>
			</div>
		{/if}
	</button>
	{#if active}
		<div class="overflow-hidden pb-8 text-ttmfDarkGreen" transition:slide={{ duration: 200 }}>
			<slot />
		</div>
	{/if}
</div>
