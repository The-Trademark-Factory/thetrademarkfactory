<script>
	export let title, content;
</script>

<div class="bg-ttmfDarkGreen py-40" />
<div class="-mt-36 max-w-screen-xl mx-auto">
	<div class="bg-white rounded-3xl py-16 px-28 shadow-pricingShadow">
		<h1 class="text-5xl font-bold">{title}</h1>
	</div>
</div>
<div class="max-w-screen-xl mx-auto py-20">
	<div class="max-w-4xl mx-auto prose prose-p:text-lg">
		{@html content}
	</div>
</div>
