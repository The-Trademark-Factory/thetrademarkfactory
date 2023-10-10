<script>
	export let resultsDetails, totalResults;

	let showAllClasses;
</script>

{#if totalResults > 0}
	<p class="text-3xl font-bold">
		<span class="text-ttmfRed">Showing 6</span> most relevant of {totalResults} total results found
	</p>
	<div class="space-y-5 mt-10">
		{#each resultsDetails as el}
			<div class="bg-white shadow-pricingShadow rounded-lg p-12">
				<div class="flex items-center justify-between gap-24">
					<p class="text-2xl font-bold">{el.words}</p>
					{el.number}
				</div>
				<div class="space-y-4 pt-6">
					{#each el.goodsAndServices as el}
						<div class="bg-ttmfBg border-2 border-ttmfBeige rounded-lg py-5 px-7">
							<p class="text-ttmfRed text-lg font-bold">Class {el.class}</p>
							<div class="flex flex-wrap items-center gap-2 pt-4">
								{#if el.descriptionText.length > 8}
									{#if showAllClasses === el.class + el.words}
										{#each el.descriptionText as el}
											<span class="bg-white rounded-full py-1 px-3">{el}</span>
										{/each}
									{:else}
										{#each el.descriptionText.slice(0, 8) as el}
											<span class="bg-white rounded-full py-1 px-3">{el}</span>
										{/each}
										<button
											on:click={() => {
												showAllClasses = el.class + el.words;
											}}
											class="bg-ttmfRed text-white rounded-full py-1 px-3">Show all classes</button>
									{/if}
								{:else}
									{#each el.descriptionText as el}
										<span class="bg-white rounded-full py-1 px-3">{el}</span>
									{/each}
								{/if}
							</div>
						</div>
					{/each}
					<div class="pt-6 grid lg:grid-cols-3 items-start gap-12">
						<div class="flex items-start gap-6">
							<img src="/upload/ic-filed.svg" alt="" />
							<div>
								<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Filed</p>
								<p class="text-lg font-bold">
									{`${new Date(el.acceptanceDate).getDate()} ${
										[
											'January',
											'February',
											'March',
											'April',
											'May',
											'June',
											'July',
											'August',
											'September',
											'October',
											'November',
											'December'
										][new Date(el.acceptanceDate).getMonth()]
									} ${new Date(el.acceptanceDate).getFullYear()}`}
								</p>
							</div>
						</div>
						<div class="flex items-start gap-6">
							<img src="/upload/ic-owner.svg" alt="" />
							<div>
								<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Owned by</p>
								<p class="text-lg font-bold">
									{el.owner[0].name}
								</p>
							</div>
						</div>
						<div class="flex items-start gap-6">
							<img src="/upload/ic-status.svg" alt="" />
							<div>
								<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Status</p>
								<p class="text-lg font-bold text-ttmfRed">
									{el.statusDetail}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
