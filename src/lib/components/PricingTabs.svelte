<script>
	import { fade, fly } from 'svelte/transition';
	import { pricing_module } from '../../../data/pricing.json';
	import Svg from './Svg.svelte';
	import Button from './Button.svelte';

	let activeTab = pricing_module[0].id;
</script>

<div class="flex max-lg:flex-wrap h-full bg-white rounded-3xl shadow-pricingShadow">
	{#each pricing_module as nav, index}
		{#if index <= pricing_module.findIndex((el) => el.id === activeTab)}
			<button
				in:fly={{ x: 20 }}
				on:click={() => (activeTab = nav.id)}
				class="flex lg:flex-col justify-center lg:justify-between max-lg:gap-6 w-full items-center px-4 lg:w-24 {nav.id ===
				'australiaPricing'
					? 'max-lg:border-b-2 lg:border-r-2 border-ttmfBrown'
					: nav.id === 'nzPricing'
					? 'bg-ttmfBrown'
					: 'bg-ttmfRed/70'}">
				<p class="lg:hidden text-lg font-bold max-md:text-left">{nav.tab.title}</p>
				<img
					src={nav.tab.image}
					alt={nav.tab.title}
					width="20"
					height="353"
					class="shrink-0 w-5 pt-7 max-lg:hidden object-contain" />
				<img
					src={nav.image}
					alt="{nav.tab.title} Icon"
					width="50"
					height="30"
					class="shrink-0 py-6 object-contain h-20" />
			</button>
		{/if}
	{/each}
	{#each pricing_module as el}
		{#if el.id === activeTab}
			<div
				in:fade={{ duration: 500 }}
				class="p-6 lg:p-16 {el.id === 'nzPricing'
					? 'bg-ttmfBrown'
					: el.id === 'australiaPricing'
					? 'bg-white'
					: 'bg-ttmfRed/70 max-lg:rounded-b-3xl lg:rounded-r-3xl'}">
				<div class="flex max-lg:flex-wrap items-center justify-between gap-6 lg:gap-24">
					<h3 class="text-3xl font-bold {el.id === 'intPricing' ? 'text-white' : 'text-ttmfBlack'}">
						{el.title}
					</h3>
					<p class="bg-ttmfRed py-2 px-4 font-bold text-white text-lg rounded-full shrink-0">
						{el.price}
					</p>
				</div>
				<div class="grid lg:grid-cols-2 gap-12 pt-12 lg:pt-16">
					<div class="flex flex-col gap-7">
						{#each el.information as info}
							<div class="flex gap-6">
								<div class="shrink-0 pt-[2px]">
									<Svg
										name="chevron-round"
										style={el.id === 'intPricing' ? 'text-white' : 'text-ttmfRed'} />
								</div>
								<p
									class="prose {el.id === 'intPricing'
										? 'text-white prose-strong:text-white'
										: 'prose-strong:text-ttmfLightGreen text-ttmfLightGreen'}">
									{@html info.info_content}
								</p>
							</div>
						{/each}
						<div class="pt-2 md:pt-12">
							<Button title={el.button.title} url={el.button.url} />
						</div>
					</div>
					<div class="bg-ttmfBg rounded-2xl py-8 px-6 lg:px-10">
						<span
							class="uppercase text-ttmfRed text-sm font-bold bg-ttmfCreme/10 rounded-full py-2 px-3">
							Includes
						</span>
						<div class="flex flex-col gap-8 pt-10 pb-4">
							{#each el.includes as el}
								<div class="flex items-center gap-8">
									<img
										src={el.image}
										alt={el.alt}
										width="48"
										height="48"
										class="w-10 lg:w-12 shrink-0" />
									<p class="text-ttmfDarkGreen">{el.text}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
	<!-- Right Nav -->
	{#each pricing_module as nav, index}
		{#if index > pricing_module.findIndex((el) => el.id === activeTab)}
			<button
				in:fly={{ x: -20 }}
				on:click={() => (activeTab = nav.id)}
				class="flex lg:flex-col justify-center lg:justify-between max-lg:gap-6 w-full items-center px-4 md:px-2 lg:w-24 {nav.id ===
				'nzPricing'
					? 'bg-ttmfBrown'
					: 'bg-ttmfRed/70 max-lg:rounded-b-3xl lg:rounded-r-3xl'}">
				<p class="lg:hidden md:text-lg font-bold max-md:text-left">{nav.tab.title}</p>
				<img src={nav.tab.image} alt={nav.tab} class="shrink-0 w-5 pt-7 max-lg:hidden" />
				<img
					src={nav.image}
					alt={nav.tab}
					width="50"
					height="30"
					class="shrink-0 py-6 object-contain h-20" />
			</button>
		{/if}
	{/each}
</div>
