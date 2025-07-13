<script>
	import { initOpenAi } from '$lib/utils/AiCheck.js';

	let aiLoading = false;
	let aiResult = null;
	let companyName = '';

	const checkWord = async () => {
		aiLoading = true;
		try {
			const resultString = await initOpenAi(companyName);
			aiResult = JSON.parse(resultString);
		} catch (error) {
			console.error(error);
			aiResult = { trademarkable: 'error', comment: error.message };
		}
		aiLoading = false;
	};
</script>

<section>
	<div class="max-w-screen-xl mx-auto py-24 px-20">
		<input
			type="text"
			bind:value={companyName}
			class="border p-2 rounded"
			placeholder="Enter company name" />
		<button on:click={checkWord} class="ml-4 p-2 bg-blue-500 text-white rounded">Check</button>

		{#if aiLoading}
			<div class="mt-4 text-gray-500">Loading...</div>
		{/if}

		{#if aiResult}
			<div class="mt-4">
				<p>Trademarkable: {aiResult.trademarkable}</p>
				<p>Comment: {aiResult.comment}</p>
			</div>
		{/if}
	</div>
</section>
