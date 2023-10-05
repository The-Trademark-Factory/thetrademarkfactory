<script>
	export let stats;
</script>

<section class="max-w-screen-xl mx-auto py-8 lg:py-14 max-2xl:px-6">
	<div class="bg-ttmfBeige px-8 lg:px-14 py-12 lg:py-20 rounded-lg">
		<div class="flex flex-wrap gap-8 lg:gap-4 justify-between">
			{#each stats as el}
				<div>
					<p class="text-5xl text-ttmfRed font-bold">{el.title}</p>
					<p class="font-bold pt-2 lg:pt-4">{el.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
