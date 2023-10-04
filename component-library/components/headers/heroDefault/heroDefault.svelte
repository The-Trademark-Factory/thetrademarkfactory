<script>
	export let title, subtitle, background;
</script>

<section class="relative bg-ttmfDarkGreen text-white">
	<div class="relative z-10 max-w-screen-xl mx-auto pt-52 pb-28 px-6">
		<h1 class="text-6xl lg:text-8xl xl:text-9xl font-bold flex flex-col">
			{title}
		</h1>
		{#if subtitle}
			<p class="text-4xl font-arkina text-ttmfRed pt-9">{subtitle}</p>
		{/if}
	</div>
	<div class="absolute bottom-0 right-0">
		<img src={background.image} alt="" />
	</div>
</section>
