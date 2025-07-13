<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { international_module } from '../../../../data/pricing.json';
	import { Check, Search, XCircle } from 'lucide-svelte';
	import { international } from '$lib/utils/stores';
	import Sidebar from '$lib/application/sidebar.svelte';
	import StartOver from '$lib/application/startOver.svelte';

	let searchQuery = '';
	let selectedCountries = {};

	if ($international.length !== 0) {
		selectedCountries = $international;
	}

	function toggleCountry(country, gov, service) {
		if (selectedCountries[country]) {
			delete selectedCountries[country];
		} else {
			selectedCountries[country] = { gov, service };
		}
		selectedCountries = { ...selectedCountries };
		international.set(selectedCountries);
	}

	$: filteredCountries = searchQuery
		? international_module.filter((country) =>
				country.title.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: international_module;
</script>

<section class="relative max-w-screen-xl mx-auto py-12 lg:py-24 max-2xl:px-6">
	<StartOver />
	<div class="grid lg:grid-cols-3 gap-12 pt-11">
		<div class="lg:col-span-2">
			<p class="text-3xl font-bold">{searchResults_page.internationalTrademarks.title}</p>
			<p class="text-xl font-bold text-ttmfRed pt-8">
				{searchResults_page.internationalTrademarks.subtitle}
			</p>
			<p class="text-ttmfLightGreen pt-2">
				{@html searchResults_page.internationalTrademarks.default_description}
			</p>
			<div>
				<div class="relative mt-6">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Filter by country name"
						class="py-3 lg:py-4 pl-12 rounded-md w-full max-md:w-full border-2 focus:border-ttmfRed outline-none" />
					<div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-ttmfRed">
						<Search />
					</div>
					{#if searchQuery}
						<div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-ttmfBlack">
							<button
								on:click={() => {
									searchQuery = '';
								}}
								class="flex flex-col items-center justify-center">
								<XCircle />
							</button>
						</div>
					{/if}
				</div>
				<div class="pt-8">
					<p class="pb-4 text-xl font-bold text-ttmfBlack/50">Popular Countries</p>
					<div class="grid lg:grid-cols-2 gap-5">
						{#each filteredCountries as el}
							{#if el.popular && el.title !== 'Australia'}
								<button
									on:click={() => toggleCountry(el.title, el.gov_fee, el.service_fee)}
									class="relative rounded-lg p-6 flex justify-between items-center transition-all border-2 border-transparent hover:border-ttmfRed {selectedCountries[
										el.title
									]
										? 'bg-ttmfBeige'
										: 'bg-white shadow-pricingShadow'}">
									<div class="flex items-center gap-4">
										{#if el.icon}
											<img
												src={el.icon}
												alt="{el.title} Flag"
												height="44"
												width="44"
												class="shadow rounded-xl" />
										{/if}
										<div class="text-left">
											<p class="text-lg font-bold">{el.title}</p>
											<p class="font-bold text-ttmfRed">AU${el.gov_fee + el.service_fee}</p>
										</div>
									</div>
									<div
										class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[
											el.title
										]
											? 'bg-ttmfRed border-ttmfRed'
											: 'border-ttmfBrown/30'}">
										<Check size="14" strokeWidth="3" />
									</div>
								</button>
							{/if}
						{/each}
					</div>
				</div>
				<div class="pt-12">
					<p class="pb-4 text-xl font-bold text-ttmfBlack/50">All Countries</p>
					<div class="grid lg:grid-cols-2 gap-5">
						{#each filteredCountries as el}
							{#if !el.popular && el.title !== 'Australia'}
								<button
									on:click={() => toggleCountry(el.title, el.gov_fee, el.service_fee)}
									class=" rounded-lg p-6 flex justify-between items-center border-2 border-transparent hover:border-ttmfRed {selectedCountries[
										el.title
									]
										? 'bg-ttmfBeige'
										: 'bg-white shadow-pricingShadow'}">
									<div class="flex items-center gap-4">
										<img
											src={el.icon}
											alt="{el.title} Flag"
											height="44"
											width="44"
											class="shadow rounded-xl" />
										<div class="text-left">
											<p class="text-lg font-bold">{el.title}</p>
											<p class="font-bold text-ttmfRed">AU${el.gov_fee + el.service_fee}</p>
										</div>
									</div>
									<div
										class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[
											el.title
										]
											? 'bg-ttmfRed border-ttmfRed'
											: 'border-ttmfBrown/30'}">
										<Check size="14" strokeWidth="3" />
									</div>
								</button>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div>
			<div>
				<Sidebar />
			</div>
		</div>
	</div>
</section>
