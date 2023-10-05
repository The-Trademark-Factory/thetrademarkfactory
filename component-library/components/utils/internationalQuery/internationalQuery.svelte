<script>
	import { ChevronDown, Check } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	export let title, description, countries;

	let activeDetails;
	let total = 0;
	let selectedCountries = { Australia: { gov: 100, service: 100 } };

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
		console.log(selectedCountries);
	}

	$: total = Object.values(selectedCountries).reduce(
		(acc, { gov, service }) => acc + gov + service,
		0
	);
</script>

<section class="max-w-screen-xl mx-auto py-16 max-2xl:px-6">
	<div class="grid lg:grid-cols-3 gap-12">
		<div class="lg:col-span-2">
			<div class="border-b-2 pb-8">
				{#if title}
					<h2 class="styleTitle">
						{@html title}
					</h2>
				{/if}
				{#if description}
					<p class="text-xl pt-6">{description}</p>
				{/if}
			</div>
			<div class="pt-8">
				<p class="pb-4 text-xl font-bold text-ttmfBlack/50">Popular Countries</p>
				<div class="grid lg:grid-cols-2 gap-4">
					{#each countries as el}
						{#if el.popular}
							<button
								on:click={() => toggleCountry(el.country_title, el.gov_fee, el.service_fee)}
								class=" rounded-lg p-6 flex justify-between items-center {selectedCountries[
									el.country_title
								]
									? 'bg-ttmfBeige'
									: 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									<img src={el.icon} alt="" />
									<div>
										<p class="text-lg font-bold">{el.country_title}</p>
										<p class="font-bold text-ttmfRed">AU${el.gov_fee + el.service_fee}</p>
									</div>
								</div>
								<div
									class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[
										el.country_title
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
				<div class="grid lg:grid-cols-2 gap-4">
					{#each countries as el}
						{#if !el.popular}
							<button
								on:click={() => toggleCountry(el.country_title, el.gov_fee, el.service_fee)}
								class=" rounded-lg p-6 flex justify-between items-center {selectedCountries[
									el.country_title
								]
									? 'bg-ttmfBeige'
									: 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									<img src={el.icon} alt="" />
									<div>
										<p class="text-lg font-bold">{el.country_title}</p>
										<p class="font-bold text-ttmfRed">AU${el.gov_fee + el.service_fee}</p>
									</div>
								</div>
								<div
									class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[
										el.country_title
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
		<div class="bg-ttmfBeige rounded-xl px-5 py-6">
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
		</div>
	</div>
</section>
