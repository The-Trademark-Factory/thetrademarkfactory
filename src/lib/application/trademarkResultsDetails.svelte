<script>
	import { Eye } from 'lucide-svelte';
	import { searchResults_page } from '../../../data/global.json';
	export let resultsDetails, totalResults;

	let showAllClasses;
	let classDescription = searchResults_page.classes_description;
</script>

{#if totalResults > 0}
	<p class="text-xl lg:text-3xl font-bold">
		<span class="text-ttmfRed">Showing {resultsDetails.length}</span> of {totalResults}
		total results found
	</p>
	<div class="space-y-5 mt-6 lg:mt-10">
		{#each resultsDetails as el}
			<div class="bg-white shadow-pricingShadow rounded-lg p-6 lg:p-12">
				<div class="flex max-lg:flex-wrap items-center justify-between gap-6 lg:gap-24">
					<p class="text-xl lg:text-2xl font-bold">{el.words}</p>
					<a
						href="https://search.ipaustralia.gov.au/trademarks/search/view/{el.number}"
						target="_blank"
						class="inline-flex items-center gap-2 bg-ttmfBg px-4 py-2 text-ttmfRed font-bold rounded-full transition-all hover:bg-ttmfRed hover:text-white"
						>{el.number}<Eye /></a>
				</div>
				<div class="space-y-4 pt-6">
					{#each el.goodsAndServices as el}
						<div class="bg-ttmfBg border-2 border-ttmfBeige rounded-lg py-5 px-7">
							<div class="space-y-1">
								<div class="flex items-center gap-4">
									<p class="text-ttmfRed text-lg font-bold">Class {el.class}</p>
									{#if el.descriptionText.length}
										<button
											on:click={() => {
												showAllClasses === el.class + el.words
													? (showAllClasses = '')
													: (showAllClasses = el.class + el.words);
											}}
											class="text-xs transition-all bg-white rounded-full py-1 px-3 border-2 border-ttmfCreme/30 text-ttmfLightGreen hover:bg-ttmfRed hover:text-white hover:border-ttmfRed">
											{showAllClasses === el.class + el.words
												? 'Show less'
												: 'Show ' +
												  el.descriptionText.length +
												  (el.descriptionText.length > 1 ? ' descriptions' : ' description')}
										</button>
									{/if}
								</div>
								<p class="text-ttmfBlack pt-2">
									{classDescription.find((desc) => desc.class_number === +el.class)?.description ??
										''}
								</p>
							</div>
							<div class="flex flex-wrap items-center gap-2 pt-3 text-xs lg:text-sm">
								{#each showAllClasses === el.class + el.words ? el.descriptionText : '' as description}
									<span class="bg-white rounded-md py-1 px-3 border-2 border-ttmfCreme/30"
										>{description}</span>
								{/each}
							</div>
						</div>
					{/each}
					<div class="pt-4 lg:pt-6 grid lg:grid-cols-3 items-start gap-8 lg:gap-12">
						<div class="flex items-start gap-6">
							<img src="/upload/ic-filed.svg" alt="" />
							<div>
								<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Filed</p>
								<p class="text-lg font-bold">
									{`${new Date(el.filingDate).getDate()} ${
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
										][new Date(el.filingDate).getMonth()]
									} ${new Date(el.filingDate).getFullYear()}`}
								</p>
							</div>
						</div>
						{#if el.owner.length > 0}
							<div class="flex items-start gap-6">
								<img src="/upload/ic-owner.svg" alt="" />
								<div>
									<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Owned by</p>
									<p class="text-lg font-bold">
										{el.owner[0]?.name}
									</p>
								</div>
							</div>
						{/if}
						{#if el.statusDetail}
							<div class="flex items-start gap-6">
								<img src="/upload/ic-status.svg" alt="" />
								<div>
									<p class="text-xs uppercase font-bold text-ttmfDarkGreen/70">Status</p>
									<p class="text-lg font-bold text-ttmfRed">
										{el.statusDetail}
									</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
