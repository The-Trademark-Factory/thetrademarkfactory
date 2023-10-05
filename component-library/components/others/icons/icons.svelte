<script>
	export let title, icons;
</script>

<section class="max-w-screen-xl mx-auto py-10 lg:py-16 max-2xl:px-6">
	<h2 class="styleTitle text-center">
		{@html title}
	</h2>
	<div class="pt-16 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-11">
		{#each icons as el}
			<div class="bg-white shadow-pricingShadow rounded-2xl flex flex-col justify-center px-4 py-4">
				<img src={el.icon} alt={el.title} class="mx-auto max-h-14" />
			</div>
		{/each}
	</div>
</section>
