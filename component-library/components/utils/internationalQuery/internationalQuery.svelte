<script>
	import { ChevronDown, Check, Search, XCircle, ChevronDownCircle, Minus, Plus } from 'lucide-svelte';
	import {
		international_module,
		service_fee_model
	} from '../../../../data/pricing.json';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import EnquiryForm from '$lib/components/enquiryForm.svelte';

	export let title_section, description, note;

	let activeDetails;
	let selectedCountries = {};
	let enquiryForm;
	let searchQuery = '';
	let showShortcut = true;
	let showForm = false;
	let classes = 1; // Nice classes

	const S = service_fee_model;

	onMount(() => {
		if (window.innerWidth <= 768) {
			const checkVisibility = () => {
				const rect = enquiryForm.getBoundingClientRect();
				showShortcut = !(rect.top < window.innerHeight && rect.bottom > 0);
			};
			window.addEventListener('scroll', checkVisibility);
			return () => window.removeEventListener('scroll', checkVisibility);
		}
	});

	function toggleDetails(country) {
		activeDetails = activeDetails === country ? null : country;
	}

	function toggleCountry(country, govByClass) {
		if (selectedCountries[country]) {
			delete selectedCountries[country];
		} else {
			selectedCountries[country] = { govByClass };
		}
		selectedCountries = { ...selectedCountries };
	}

	function setClasses(n) {
		classes = Math.min(10, Math.max(1, n));
	}

	// Gov fee for a country at the current class count (precomputed schedule, capped at 10)
	function govAt(entry) {
		const c = Math.min(10, Math.max(1, classes));
		return entry.govByClass[c] ?? entry.govByClass[1];
	}

	$: filteredCountries = searchQuery
		? international_module.filter((c) =>
				c.title.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: international_module;

	$: countryCount = Object.keys(selectedCountries).length;

	// Government (WIPO) fees — use each country's real per-class schedule, not flat × classes.
	$: govTotal = Object.values(selectedCountries).reduce(
		(acc, entry) => acc + govAt(entry),
		0
	);

	// Tiered TTMF service fee (AUD, ex GST): base covers first 3 countries + 3 classes.
	$: extraCountries = Math.max(0, countryCount - S.base_includes_countries);
	$: extraClasses = Math.max(0, classes - S.base_includes_classes);
	$: serviceExGst = countryCount === 0
		? 0
		: S.base_aud_ex_gst
			+ extraCountries * S.per_extra_country_aud_ex_gst
			+ extraClasses * S.per_extra_class_aud_ex_gst;
	$: serviceGst = Math.round(serviceExGst * S.gst_rate);
	$: serviceIncGst = serviceExGst + serviceGst;

	$: estimatedTotal = govTotal + serviceIncGst;
</script>

<section id="international-pricing" class="relative max-w-screen-xl mx-auto py-16">
	<div class="grid lg:grid-cols-3 gap-12 max-2xl:px-6">
		<div class="lg:col-span-2">
			<div class="border-b-2 pb-8">
				{#if title_section}
					<h2 class="styleTitle">{@html title_section}</h2>
				{/if}
				{#if description}
					<p class="text-xl pt-6 prose">{@html description}</p>
				{/if}
				{#if note}
					<p class="text-ttmfRed pt-4">{note}</p>
				{/if}

				<!-- Class selector -->
				<div class="mt-6 flex items-center gap-4 flex-wrap">
					<p class="font-bold text-ttmfBlack">Classes of goods/services</p>
					<div class="flex items-center gap-3 bg-white border-2 rounded-md px-3 py-2">
						<button
							on:click={() => setClasses(classes - 1)}
							class="text-ttmfRed disabled:opacity-30"
							disabled={classes <= 1}
							aria-label="Fewer classes">
							<Minus size="18" strokeWidth="3" />
						</button>
						<span class="font-bold text-lg w-6 text-center">{classes}</span>
						<button
							on:click={() => setClasses(classes + 1)}
							class="text-ttmfRed disabled:opacity-30"
							disabled={classes >= 10}
							aria-label="More classes">
							<Plus size="18" strokeWidth="3" />
						</button>
					</div>
					<p class="text-sm text-ttmfBlack/50">First 3 classes included in the base service fee.</p>
				</div>

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
							<button on:click={() => (searchQuery = '')} class="flex flex-col items-center justify-center">
								<XCircle />
							</button>
						</div>
					{/if}
				</div>
			</div>

			<!-- Popular -->
			<div class="pt-8">
				<p class="pb-4 text-xl font-bold text-ttmfBlack/50">Popular Countries</p>
				<div class="grid lg:grid-cols-2 gap-5">
					{#each filteredCountries as el}
						{#if el.popular}
							<button
								on:click={() => toggleCountry(el.title, el.gov_fee_by_class)}
								class="relative rounded-lg p-6 flex justify-between items-center transition-all border-2 border-transparent hover:border-ttmfRed {selectedCountries[el.title] ? 'bg-ttmfBeige' : 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									{#if el.icon}
										<img src={el.icon} alt="{el.title} Flag" height="44" width="44" class="shadow rounded-xl" />
									{/if}
									<div class="text-left">
										<p class="text-lg font-bold">{el.title}</p>
										<p class="font-bold text-ttmfRed">from AU${el.gov_fee} gov. fee</p>
										{#if el.eu_note}
											<p class="text-xs text-ttmfBlack/50 mt-1 max-w-[14rem]">{el.eu_note}</p>
										{/if}
									</div>
								</div>
								<div class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[el.title] ? 'bg-ttmfRed border-ttmfRed' : 'border-ttmfBrown/30'}">
									<Check size="14" strokeWidth="3" />
								</div>
								{#if el.title === 'Australia'}
									<div class="absolute right-0 -top-4 z-20">
										<a href="/" class="py-2 px-6 bg-ttmfRed text-white text-xs font-bold rounded-full shadow-lg shadow-ttmfRed/40">SEARCH & REGISTER</a>
									</div>
								{/if}
							</button>
						{/if}
					{/each}
				</div>
			</div>

			<!-- All -->
			<div class="pt-12">
				<p class="pb-4 text-xl font-bold text-ttmfBlack/50">All Countries</p>
				<div class="grid lg:grid-cols-2 gap-5">
					{#each filteredCountries as el}
						{#if !el.popular}
							<button
								on:click={() => toggleCountry(el.title, el.gov_fee_by_class)}
								class="rounded-lg p-6 flex justify-between items-center border-2 border-transparent hover:border-ttmfRed {selectedCountries[el.title] ? 'bg-ttmfBeige' : 'bg-white shadow-pricingShadow'}">
								<div class="flex items-center gap-4">
									{#if el.icon}
										<img src={el.icon} alt="{el.title} Flag" height="44" width="44" class="shadow rounded-xl" />
									{/if}
									<div class="text-left">
										<p class="text-lg font-bold">{el.title}</p>
										<p class="font-bold text-ttmfRed">from AU${el.gov_fee} gov. fee</p>
										{#if el.eu_note}
											<p class="text-xs text-ttmfBlack/50 mt-1 max-w-[14rem]">{el.eu_note}</p>
										{/if}
									</div>
								</div>
								<div class="w-6 h-6 bg-ttmfBg rounded-full flex items-center justify-center text-ttmfBg border-2 {selectedCountries[el.title] ? 'bg-ttmfRed border-ttmfRed' : 'border-ttmfBrown/30'}">
									<Check size="14" strokeWidth="3" />
								</div>
							</button>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- Enquiry panel -->
		<div>
			<div id="enquiryForm" bind:this={enquiryForm} class="sticky top-32 bg-ttmfBeige rounded-xl px-5 py-6 scroll-mt-32">
				{#if countryCount === 0}
					<div class="lg:min-h-[600px]">
						<p class="text-xl font-bold">Your Enquiry</p>
						<p class="font-bold text-ttmfCreme/60 pt-4">Select one or multiple countries to enquire</p>
						<div class="border border-ttmfCreme/30 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-2">
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
					<p class="text-sm text-ttmfBlack/50 pt-1">{countryCount} {countryCount === 1 ? 'country' : 'countries'} · {classes} {classes === 1 ? 'class' : 'classes'}</p>
					<div class="pt-5 space-y-2">
						{#each Object.keys(selectedCountries) as country}
							<div class="bg-white rounded-lg p-5 shadow-pricingShadow">
								<button on:click={() => toggleDetails(country)} class="flex gap-2 justify-between w-full">
									<p class="text-lg font-bold">{country}</p>
									<div class="flex items-center gap-2 text-ttmfRed">
										<p class="font-bold">AU${govAt(selectedCountries[country])}</p>
										<ChevronDown size="20" />
									</div>
								</button>
								{#if activeDetails === country}
									<div in:fly={{ y: -20 }} class="text-ttmfBlack/50 font-bold border-t pt-5 mt-5">
										<div class="flex justify-between items-center">
											<p>Govt fee ({classes} {classes === 1 ? 'class' : 'classes'})</p>
											<p>AU${govAt(selectedCountries[country])}</p>
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>

					<!-- Service fee breakdown -->
					<div class="border-t mt-6 pt-6 space-y-2 font-bold text-black/50">
						<div class="flex justify-between items-center">
							<p>Service fee (base, ≤3 countries, ≤3 classes)</p>
							<p>AU${S.base_aud_ex_gst}</p>
						</div>
						{#if extraCountries > 0}
							<div class="flex justify-between items-center">
								<p>Extra countries ({extraCountries} × ${S.per_extra_country_aud_ex_gst})</p>
								<p>AU${extraCountries * S.per_extra_country_aud_ex_gst}</p>
							</div>
						{/if}
						{#if extraClasses > 0}
							<div class="flex justify-between items-center">
								<p>Extra classes ({extraClasses} × ${S.per_extra_class_aud_ex_gst})</p>
								<p>AU${extraClasses * S.per_extra_class_aud_ex_gst}</p>
							</div>
						{/if}
						<div class="flex justify-between items-center">
							<p>GST (10%)</p>
							<p>AU${serviceGst}</p>
						</div>
						<div class="flex justify-between items-center pt-1">
							<p>Govt fees (all countries)</p>
							<p>AU${govTotal}</p>
						</div>
					</div>

					<div class="flex justify-between items-center text-lg font-bold pt-6 border-t mt-4">
						<p>Estimated Total</p>
						<p>AU${estimatedTotal}</p>
					</div>

					<p class="text-xs text-ttmfBlack/50 pt-3 leading-relaxed">
						Indicative estimate only. Government fees are WIPO fees converted to AUD and may vary with exchange rates. Prosecution fees apply per country if an application is objected to or rejected, and are additional. Confirm a formal fee estimate before filing.
					</p>

					{#if showForm}
						<div class="pt-8">
							<EnquiryForm
								endpoint="https://usebasin.com/f/db99723575df"
								button="Submit Enquiry"
								type="international"
								countries={Object.keys(selectedCountries)}
								total={estimatedTotal} />
						</div>
					{:else}
						<button on:click={() => (showForm = true)} class="bg-ttmfRed text-white font-bold px-12 py-5 rounded w-full mt-6">Enquire</button>
					{/if}
				{/if}
			</div>
		</div>
	</div>

	{#if showShortcut && countryCount !== 0}
		<div id="enquiryShortcut" class="lg:hidden sticky bottom-0 w-full bg-ttmfRed text-lg py-4 px-6 text-center">
			<a href="#enquiryForm" class="font-bold text-white flex items-center justify-center gap-2">View Enquiry form<ChevronDownCircle size="20" /></a>
		</div>
	{/if}
</section>
