<script>
	import { enhance } from '$app/forms';
	import { searchResults_page } from '../../../data/global.json';
	import { getItem, setItem } from '$lib/utils/localStorageUtils';
	import { openDB, getImage } from '$lib/utils/indexedDB';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { X } from 'lucide-svelte';
	import {
		searchType,
		searchLogo,
		searchTerm,
		classes,
		details,
		detailsValid,
		international
	} from '$lib/utils/stores';
	import { uploadImage } from '$lib/utils/firebase.js';

	export let terms;

	const feeFirstClass = searchResults_page.pricing.first_class;
	const feeAdditionalClass = searchResults_page.pricing.additional_class;
	const feeGovernment = searchResults_page.pricing.government_fee;
	let totalPrice = 0;
	let gstTotal = 0;
	let showAllDescriptions;
	let checkingOut = false;

	function removeDescriptionInStore(classNumber, description) {
		let currentClasses = $classes.find((c) => c.class === classNumber);

		const index = currentClasses.descriptions.indexOf(description);
		if (index === -1) {
			currentClasses.descriptions.push(description);
		} else {
			currentClasses.descriptions.splice(index, 1);
		}

		if (currentClasses.descriptions.length === 0) {
			classes.set($classes.filter((c) => c.class !== classNumber));
		} else {
			classes.set($classes);
		}
	}

	$: {
		const numClasses = $classes.length;
		if (numClasses > 0) {
			totalPrice =
				feeFirstClass + (numClasses - 1) * feeAdditionalClass + numClasses * feeGovernment;
			gstTotal =
				(feeFirstClass +
					($classes.length - 1) * feeAdditionalClass +
					$classes.length -
					$classes.length) *
				0.1;
		} else {
			totalPrice = 0;
			gstTotal = 0;
		}
	}

	async function getStoredImage() {
		let imageDB = await openDB();
		let imageFile = getImage(imageDB);
		return imageFile;
	}

	const getClassPrice = (index) => {
		return index === 0 ? feeFirstClass : feeAdditionalClass;
	};

	// Handle Stripe payment
	const onCheckout = async ({ formData, cancel }) => {
		if (checkingOut) return cancel();
		checkingOut = true;

		const type = $searchType;
		const data = type === 'word' ? getItem('searchTerm') : await getStoredImage();
		const createdAt = new Date().getTime();

		const searchSource =
			type === 'word' ? data : await uploadImage(data, $details.email, createdAt);

		formData.set('search_type', type);
		formData.set('search_source', searchSource);
		formData.set('created_at', createdAt);

		return ({ result }) => {
			console.log('Checkout result: ', result);
			if (result.type === 'redirect') window.location = result.location;

			checkingOut = false;
		};
	};
</script>

<div id="sidebar" class="bg-ttmfBeige px-5 py-6 rounded-lg scroll-mt-12">
	<div
		class="flex flex-wrap items-center gap-2 text-xl font-bold {$searchLogo
			? 'justify-between'
			: ''}">
		<p>Trademark</p>
		{#if $searchTerm}
			<span
				class="shrink-0 text-base capitalize rounded-full px-2 border-2 text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10"
				>{$searchTerm}</span>
		{:else if $searchLogo}
			<img src={$searchLogo} alt="Uploaded Logo" class="h-10 max-w-xs object-contain" />
		{/if}
	</div>
	{#if Object.keys($international).length > 0}
		<div class="bg-white p-5 rounded-lg mt-5">
			<div class="border-b pb-3 mb-3">
				<p class="font-bold">International Trademarks</p>
			</div>
			<div class="flex flex-wrap items-center gap-2">
				{#each Object.keys($international) as el}
					<span
						class="px-2 py-0 rounded-full border-2 border-ttmfCreme/30 bg-ttmfBeige text-ttmfBlack text-sm"
						>{el}</span>
				{/each}
			</div>
		</div>
	{/if}
	{#if $classes.length > 0}
		{#each $classes as el, index}
			<div class="bg-white p-5 rounded-lg mt-5">
				<div class="flex justify-between gap-2 border-b pb-3 mb-3">
					<div class="flex flex-col">
						<p class="font-bold">Class {el.class}</p>
						<span class="text-xs text-ttmfBlack"
							>{el.descriptions.length}
							{el.descriptions.length > 1 ? 'descriptions' : 'description'}</span>
					</div>
					<p class="font-bold text-ttmfRed">AU${getClassPrice(index)}</p>
				</div>
				<div class="flex justify-between gap-2 font-bold text-sm text-ttmfLightGreen/70">
					<p>IP Australia Fee</p>
					<p>AU${feeGovernment}</p>
				</div>
				<div class="flex flex-col divide-y">
					<div class="pt-2">
						<div class="divide-y pt-2">
							{#each showAllDescriptions === el.class ? el.descriptions : el.descriptions.slice(0, 1) as description}
								<div
									class="flex gap-4 justify-between text-sm {el.descriptions.length > 1
										? 'py-3'
										: ''}">
									<p class="font-bold text-ttmfLightGreen">{description}</p>
									<button
										on:click={() => removeDescriptionInStore(el.class, description)}
										class="shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfLightGreen hover:bg-ttmfRed"
										><X size="12" strokeWidth="3" /></button>
								</div>
							{/each}
						</div>
						{#if el.descriptions.length > 1 && showAllDescriptions !== el.class}
							<button
								on:click={() => {
									showAllDescriptions = el.class;
								}}>
								<p class="text-ttmfRed font-bold text-sm">+{el.descriptions.length - 1} more</p>
							</button>
						{/if}
					</div>
				</div>
			</div>
		{/each}
		<div class="flex justify-between gap-2 font-bold text-ttmfBlack/50 pt-6">
			<p>Subtotal</p>
			<p>AU${totalPrice}</p>
		</div>
		<div class="flex justify-between gap-2 font-bold text-ttmfBlack/50 pt-2">
			<p>GST</p>
			<p>AU${gstTotal}</p>
		</div>
		<div class="flex justify-between gap-2 text-xl font-bold text-ttmfBlack pt-4 pb-6">
			<p>Total price</p>
			<p>AU${totalPrice + gstTotal}</p>
		</div>
	{:else}
		<div class="py-6">
			<p class="text-ttmfCreme/50 font-bold">Search & Add classes to continue</p>
		</div>
	{/if}
	{#if $page.route.id.includes('classes') && $classes.length > 0}
		<button
			on:click={() => {
				setItem('classes', $classes);
				goto('/application/details');
			}}
			class="sidebarNext">Continue to details</button>
	{:else if $page.route.id.includes('details') && $detailsValid}
		<button
			on:click={() => {
				setItem('details', $details);
				goto('/application/international');
			}}
			class="sidebarNext">
			Continue to intl. trademarks
		</button>
		<button
			on:click={() => {
				goto('/application/classes');
			}}
			class="sidebarPrevious">
			Back to classes
		</button>
	{:else if $page.route.id.includes('international')}
		<button
			on:click={() => {
				setItem('international', $international);
				goto('/application/payment');
			}}
			class="sidebarNext">
			Continue to payment
		</button>
		<button
			on:click={() => {
				goto('/application/details');
			}}
			class="sidebarPrevious">
			Back to details
		</button>
	{:else if $page.route.id.includes('payment') && terms}
		<form method="post" action="?/checkout" use:enhance={onCheckout}>
			<input type="hidden" name="personal_details" value={JSON.stringify($details)} />
			<input
				type="hidden"
				name="items"
				value={JSON.stringify(
					$classes.map((el, i) => ({
						class: el.class,
						price: getClassPrice(i),
						description: el.descriptions
					}))
				)} />
			<input type="hidden" name="government_fee" value={feeGovernment} />
			<input
				type="hidden"
				name="international_trademarks"
				value={Object.keys($international).join(', ')} />
			<button type="submit" disabled={checkingOut} class="sidebarNext">
				{#if checkingOut}
					Processing...
				{:else}
					Checkout
				{/if}
			</button>
		</form>
	{:else}
		<button disabled class="bg-ttmfRed/50 text-white font-bold px-12 py-5 rounded w-full"
			>Continue</button>
	{/if}
</div>
