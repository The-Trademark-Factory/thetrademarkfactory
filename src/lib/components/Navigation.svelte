<script>
	import Button from './Button.svelte';
	import nav from '../../../data/nav.json';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<nav class="fixed z-40 w-full {y > 50 ? 'shadow-md bg-ttmfDarkGreen py-6' : 'xl:shadow-none pt-8'}">
	<div class="max-w-screen-2xl mx-auto max-2xl:px-6">
		<div class="flex justify-between items-center">
			{#if y > 50}
				<p class="text-4xl text-white">TTMF</p>
			{:else}
				<a href="/"><img src="/upload/logo.png" alt="TTMF" /></a>
			{/if}
			<div class="max-lg:hidden">
				<Button title={nav.button.title} url={nav.button.url} />
			</div>
		</div>
	</div>
</nav>
