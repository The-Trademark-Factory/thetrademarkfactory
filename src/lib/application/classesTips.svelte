<script>
	import { searchResults_page } from '../../../data/global.json';
	import { AlertTriangle } from 'lucide-svelte';
	let showWarningContent = false;
</script>

{#if searchResults_page.searchClasses.enable_warning}
	<div class="flex gap-4 border-2 border-ttmfRed p-4 bg-ttmfRed/5 rounded-md">
		<span class="shrink-0 text-ttmfRed">
			<AlertTriangle />
		</span>
		{#if !showWarningContent}
			<div class="flex gap-2 justify-between w-full">
				<p class="lg:text-lg font-bold">
					{searchResults_page.searchClasses.warning_title}
				</p>
				<div>
					<button
						on:click={() => {
							showWarningContent = !showWarningContent;
						}}
						class="bg-ttmfRed text-white font-bold rounded-full py-0 px-2 border-2 border-transparent transition-all hover:bg-transparent hover:text-ttmfRed hover:border-ttmfRed max-lg:text-sm"
						>Read</button>
				</div>
			</div>
		{:else if showWarningContent}
			<div class="lg:text-lg prose max-w-none">
				{@html searchResults_page.searchClasses.warning_description}
				<button
					on:click={() => {
						showWarningContent = !showWarningContent;
					}}
					class="bg-ttmfRed text-white font-bold rounded-full py-0 px-2 border-2 border-transparent transition-all hover:bg-transparent hover:text-ttmfRed hover:border-ttmfRed max-lg:text-sm"
					>Close</button>
			</div>
		{/if}
	</div>
{/if}
