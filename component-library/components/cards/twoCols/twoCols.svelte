<script>
	import Button from '$lib/components/Button.svelte';
	export let title, content, button, media;
</script>

<section>
	<div class="max-w-screen-xl mx-auto py-16 max-2xl:px-6">
		<div class="grid lg:grid-cols-2 gap-24 {media.align_center ? 'items-center' : ''}">
			<div class={media.image_right ? 'order-last' : ''}>
				{#if media.content}
					<div class="text-lg prose pb-10">
						{@html media.content}
					</div>
				{/if}
				{#if media.image}
					<div>
						<img src={media.image} alt={media.image_alt} class="w-full h-full" />
					</div>
				{/if}
			</div>
			<div>
				{#if title}
					<h2 class="styleTitle">
						{@html title}
					</h2>
				{/if}
				{#if content}
					<div class="text-lg prose {title ? 'pt-10' : ''}">
						{@html content}
					</div>
				{/if}
				{#if button.title}
					<div class="pt-14">
						<Button title={button.title} url={button.url} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
