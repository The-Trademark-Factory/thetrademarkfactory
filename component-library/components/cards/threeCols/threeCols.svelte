<script>
	export let title, cards;
</script>

<section>
	<div class="max-w-screen-xl mx-auto py-16 max-2xl:px-6">
		<h2 class="styleTitle text-center">
			{@html title}
		</h2>
		<div class="grid lg:grid-cols-3 gap-8 mt-20">
			{#each cards as el}
				<div class="pt-16 pb-10 px-8 bg-white rounded-2xl shadow-pricingShadow">
					<img src={el.icon} alt={el.title_card} class="w-14 h-14" />
					<h3 class="text-2xl font-bold text-ttmfRed py-6">
						{el.title_card}
					</h3>
					<p>{el.description_card}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
