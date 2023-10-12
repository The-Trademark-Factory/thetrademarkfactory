<script>
	import { ChevronDown, Check, Search, XCircle } from 'lucide-svelte';
	import { international_module } from '../../../../data/pricing.json';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let title_section, description;

	let activeDetails;
	let total = 0;
	let selectedCountries = {};
	let enquiryForm;
	let searchQuery = '';
	let showShortcut = true;

	onMount(() => {
		if (window.innerWidth <= 768) {
			const checkVisibility = () => {
				const rect = enquiryForm.getBoundingClientRect();
				showShortcut = !(rect.top < window.innerHeight && rect.bottom > 0);
			};

			window.addEventListener('scroll', checkVisibility);
			return () => {
				window.removeEventListener('scroll', checkVisibility);
			};
		}
	});

	function toggleDetails(country) {
		if (activeDetails === country) {
			activeDetails = null;
		} else {
			activeDetails = country;
		}
	}

	function toggleCountry(country, gov, service) {
		if (selectedCountries[country]) {
			delete selectedCountries[country];
		} else {
			selectedCountries[country] = { gov, service };
		}
		selectedCountries = { ...selectedCountries };
	}

	$: filteredCountries = searchQuery
		? international_module.filter((country) =>
				country.title.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: international_module;

	$: total = Object.values(selectedCountries).reduce(
		(acc, { gov, service }) => acc + gov + service,
		0
	);
</script>

<section id="international-pricing" class="relative max-w-screen-xl mx-auto py-16">
	<div class="grid lg:grid-cols-3 gap-12 max-2xl:px-6">
		<div class="lg:col-span-2">
			<div class="border-b-2 pb-8">
				{#if title_section}
					<h2 class="styleTitle">
						{@html title_section}
					</h2>
				{/if}
				{#if description}
					<p class="text-xl pt-6 prose">{@html description}</p>
				{/if}
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
			</div>
			<div class="pt-8">
				<p class="pb-4 text-xl font-bold text-ttmfBlack/50">Popular Countries</p>
				<div class="grid lg:grid-cols-2 gap-5">
					{#each filteredCountries as el}
						{#if el.popular}
							<button
								on:click={() => toggleCountry(el.title, el.gov_fee, el.service_fee)}
								class="relative rounded-lg p-6 flex justify-between items-center transition-all border-2 border-transparent hover:border-ttmfRed {selectedCountries[
									el.title
								]
									? 'bg-ttmfBeige'
									: 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									<img src={el.icon} alt="" />
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
								{#if el.title === 'Australia'}
									<div class="absolute right-0 -top-4 z-20">
										<a
											href="/"
											class="py-2 px-6 bg-ttmfRed text-white text-xs font-bold rounded-full shadow-lg shadow-ttmfRed/40"
											>SEARCH & REGISTER</a>
									</div>
								{/if}
							</button>
						{/if}
					{/each}
				</div>
			</div>
			<div class="pt-12">
				<p class="pb-4 text-xl font-bold text-ttmfBlack/50">All Countries</p>
				<div class="grid lg:grid-cols-2 gap-5">
					{#each filteredCountries as el}
						{#if !el.popular}
							<button
								on:click={() => toggleCountry(el.title, el.gov_fee, el.service_fee)}
								class=" rounded-lg p-6 flex justify-between items-center border-2 border-transparent hover:border-ttmfRed {selectedCountries[
									el.title
								]
									? 'bg-ttmfBeige'
									: 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									<img src={el.icon} alt="" />
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
		<div>
			<div
				id="enquiryForm"
				bind:this={enquiryForm}
				class="sticky top-32 bg-ttmfBeige rounded-xl px-5 py-6">
				{#if total === 0}
					<div class="lg:min-h-[600px]">
						<p class="text-xl font-bold">Your Enquiry</p>
						<p class=" font-bold text-ttmfCreme/60 pt-4">
							Select one or multiple countries to enquiry
						</p>
						<div
							class="border border-ttmfCreme/30 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-2">
							<div class="animate-pulse flex justify-between items-center">
								<div class="flex items-center gap-2">
									<div class="rounded-lg bg-ttmfCreme/50 h-10 w-10" />
									<div class="space-y-2">
										<div class="h-2 bg-ttmfCreme/50 rounded w-28" />
										<div class="h-2 bg-ttmfCreme/50 rounded w-20" />
									</div>
								</div>
								<div class="rounded-full bg-ttmfCreme/50 h-5 w-5" />
							</div>
						</div>
					</div>
				{:else}
					<p class="text-xl font-bold">Your Enquiry</p>
					<div class="pt-5 space-y-2">
						{#each Object.keys(selectedCountries) as country}
							<div class="bg-white rounded-lg p-5 shadow-pricingShadow">
								<button
									on:click={() => {
										toggleDetails(country);
									}}
									class="flex gap-2 justify-between w-full">
									<p class="text-lg font-bold">{country}</p>
									<div class="flex items-center gap-2 text-ttmfRed">
										<p class="font-bold">
											AU${selectedCountries[country].gov + selectedCountries[country].service}
										</p>
										<ChevronDown size="20" />
									</div>
								</button>
								{#if activeDetails === country}
									<div in:fly={{ y: -20 }} class="text-ttmfBlack/50 font-bold border-t pt-5 mt-5">
										<div class="flex justify-between items-center">
											<p>Government Fee</p>
											<p>AU${selectedCountries[country].gov}</p>
										</div>
										<div class="flex justify-between items-center pt-2">
											<p>Service Fee</p>
											<p>AU${selectedCountries[country].service}</p>
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
					<div class="flex justify-between items-center text-lg font-bold pt-6">
						<p>Estimated Total</p>
						<p>AU${total}</p>
					</div>
					<button class="bg-ttmfRed text-white font-bold px-12 py-5 rounded w-full mt-6"
						>Enquire</button>
				{/if}
			</div>
		</div>
	</div>
	{#if showShortcut && total !== 0}
		<div
			id="enquiryShortcut"
			class="lg:hidden sticky bottom-0 w-full bg-ttmfRed py-4 px-6 text-center">
			<a href="#enquiryForm" class="font-bold text-white">View Enquiry form</a>
		</div>
	{/if}
</section>
