<script>
	import { Menu, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';
	import nav from '../../../data/nav.json';
	import Svg from './Svg.svelte';

	let y = 0;

	let menu = false;
</script>

<svelte:window bind:scrollY={y} />
<nav class="fixed z-40 w-full {y > 50 ? 'shadow-md bg-ttmfDarkGreen py-6' : 'xl:shadow-none pt-6'}">
	<div class="max-w-screen-2xl mx-auto max-2xl:px-6">
		<div class="flex justify-between items-center">
			<a href="/" class={y > 50 ? 'max-md:hidden' : ''}
				><span class="max-md:hidden"><Svg name="logo" /></span><span class="md:hidden"
					><Svg name="logo-vertical" width="w-[150px]" /></span
				><span class="sr-only">The Trademark Factory Logo</span></a>
			<div class="md:hidden {y > 50 ? '' : 'max-md:hidden'}">
				<a
					href={nav.button.url}
					class="bg-ttmfRed text-white font-bold px-6 py-4 rounded justify-center"
					>{nav.button.title_mobile}</a>
			</div>
			<div class="inline-flex items-center gap-6">
				<div class="max-md:hidden">
					<Button title={nav.button.title} url={nav.button.url} />
				</div>
				<button
					on:click={() => {
						menu = !menu;
					}}
					class="h-12 w-12 md:w-16 md:h-16 bg-white text-ttmfRed inline-flex items-center justify-center rounded-full transition-all hover:bg-ttmfRed hover:text-white"
					><Menu size="30" /></button>
			</div>
		</div>
	</div>
</nav>

{#if menu}
	<div transition:fly={{ y: -100 }} class="fixed inset-0 bg-ttmfDarkGreen z-50">
		<div class="max-w-screen-md mx-auto py-6 md:py-16 text-white font-bold px-6">
			<div class="flex justify-between items-center gap-6">
				<a href="/"
					><span class="max-md:hidden"><Svg name="logo" width="md:w-[450px]" /></span><span
						class="md:hidden"><Svg name="logo-vertical" width="w-[150px]" /></span
					></a>
				<button
					on:click={() => {
						menu = false;
					}}
					class="text-white border-2 border-white rounded-full p-2 md:p-4 md:mt-2 transition-all hover:bg-white hover:text-ttmfRed">
					<X />
				</button>
			</div>
			<div class="flex flex-col justify-center gap-12 pt-16 md:pt-16 text-3xl md:text-5xl">
				{#each nav.nav as el}
					<a
						href={el.url}
						on:click={() => {
							menu = false;
						}}
						class="transition-all hover:text-ttmfRed">{el.title}</a>
				{/each}
			</div>
			<div class="pt-16 md:hidden">
				<Button title={nav.button.title_mobile} url={nav.button.url} />
			</div>
		</div>
	</div>
{/if}
