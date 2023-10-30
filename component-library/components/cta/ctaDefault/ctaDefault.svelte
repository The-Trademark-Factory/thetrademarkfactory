<script>
	import Button from '$lib/components/Button.svelte';
	export let title, content, button;
</script>

<section class="max-w-screen-xl mx-auto py-14 max-2xl:px-6">
	<div class="bg-ttmfBeige px-8 lg:px-14 py-14 lg:py-24 rounded-lg">
		<div class="text-center">
			{#if title}
				<h2 class="styleTitle">
					{@html title}
				</h2>
			{/if}
			{#if content}
				<div class="max-w-none text-lg prose prose-em:font-semibold {title ? 'pt-10' : ''}">
					{@html content}
				</div>
			{/if}
			{#if button.title_button}
				<div class="pt-14">
					<Button title={button.title_button} url={button.url} />
				</div>
			{/if}
		</div>
	</div>
</section>
