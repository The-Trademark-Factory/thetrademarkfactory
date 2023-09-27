<script>
	import Svg from '$lib/components/Svg.svelte';
	import Button from '$lib/components/Button.svelte';

	export let title, description, button;
</script>

<section class="relative py-20 max-2xl:px-6 max-w-8xl mx-auto overflow-hidden">
	<div
		class="max-w-screen-xl mx-auto grid lg:grid-cols-3 bg-ttmfRed rounded-3xl px-8 md:px-16 pt-16 md:pt-24">
		<div class="relative z-10 lg:col-span-2">
			<h2
				class="text-5xl text-white font-bold prose prose-em:not-italic prose-em:font-arkina prose-em:text-ttmfBlack prose-em:font-normal prose-em:text-6xl lg:pr-12">
				{@html title}
			</h2>
			<div class="relative max-sm:hidden">
				<img src="/upload/map-bg.png" alt="" class="pt-12" />
				<div class="lg:hidden absolute -top-10 left-10 w-full">
					<Svg name="plane" width="100%" />
				</div>
			</div>
		</div>
		<div class="relative z-10 pb-24 sm:flex flex-col justify-end max-sm:pt-6">
			<p class="text-lg text-white prose leading-loose prose-strong:text-white">
				{@html description}
			</p>
			<div class="pt-12">
				<Button style="white" title={button.label} url={button.url} />
			</div>
		</div>
	</div>
	<div class="max-lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2">
		<Svg name="plane" />
	</div>
</section>
