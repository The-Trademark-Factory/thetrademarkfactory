<script>
	export let stats;
</script>

<section class="max-w-screen-xl mx-auto py-14 max-2xl:px-6">
	<div class="bg-ttmfBeige px-14 py-20 rounded-lg">
		<div class="flex flex-wrap justify-between">
			{#each stats as el}
				<div>
					<p class="text-5xl text-ttmfRed font-bold">{el.title}</p>
					<p class="font-bold pt-4">{el.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
