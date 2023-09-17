<script>
	export let data;

	const pages = data.pages;
</script>

<svelte:head>
	<title>The TradeMark Factory</title>
</svelte:head>

<section class="max-w-screen-3xl mx-auto text-white px-6">
	<h2>Pages</h2>
	<ul>
		{#each pages as page}
			<li><a href="/{page.slug}/">{page.data.title}</a></li>
		{/each}
	</ul>
</section>
