<script>
	import OrderConfirmedField from '../../../lib/application/orderConfirmedField.svelte';

	export let data;

	$: ({
		applicationDetails,
		applicationType,
		customerDetails,
		lineItems,
		internationalTrademarks,
		stripe,
		total
	} = data.order ?? {});

	console.log(data.order);
</script>

{#if data.order}
	<section class="relative bg-ttmfDarkGreen text-white overflow-hidden">
		<div
			class="relative z-10 max-w-screen-2xl mx-auto pt-44 lg:pt-44 lg:pb-20 max-2xl:px-6 flex items-center justify-between gap-6 flex-wrap">
			<h1 class="text-4xl lg:text-6xl font-bold flex items-center gap-6">
				Order
				{#if applicationType.type === 'word'}
					<span
						class="px-5 py-3 rounded-full text-3xl lg:text-5xl border-2 border-ttmfLightTextGreen bg-ttmfGreen/50"
						>{applicationType.source}</span>
				{:else}
					<a href={applicationType.source} class="underline">Download Image</a>
				{/if}
			</h1>
			<a
				href="https://dashboard.stripe.com/payments/{stripe.paymentIntentId}"
				target="_blank"
				class="text-xl underline underline-offset-4">View Stripe Record</a>
		</div>
	</section>

	<section class="max-w-screen-2xl mx-auto max-2xl:px-6 py-16">
		<div>
			<p class="text-2xl font-bold">Customer Details</p>
			<div class="grid lg:grid-cols-4 gap-6 pt-6">
				<OrderConfirmedField key="First name" value={customerDetails.firstName} />
				<OrderConfirmedField key="Last name" value={customerDetails.lastName} />
				<OrderConfirmedField key="Email" value={customerDetails.email} />
				<OrderConfirmedField key="Phone" value={customerDetails.phone} />
			</div>
		</div>
		<div class="pt-12">
			<p class="text-2xl font-bold">Application Details</p>
			<div class="grid lg:grid-cols-4 gap-6 pt-6">
				<OrderConfirmedField key="Owner" value={applicationDetails.owner} />
				<OrderConfirmedField key="Based" value={applicationDetails.based} />
				<OrderConfirmedField key="Company Name" value={applicationDetails.companyName} />
				<OrderConfirmedField key="Address" value={applicationDetails.address} />
				<OrderConfirmedField key="Address 2" value={applicationDetails.addressTwo} />
				<OrderConfirmedField key="City" value={applicationDetails.city} />
				<OrderConfirmedField key="State" value={applicationDetails.state} />
				<OrderConfirmedField key="Postcode" value={applicationDetails.postcode} />
				<OrderConfirmedField key="Country" value={applicationDetails.country} />
				<OrderConfirmedField key="ABN" value={applicationDetails.abn} />
			</div>
		</div>
		{#if internationalTrademarks.length > 0}
			<div class="pt-12">
				<p class="text-2xl font-bold">International Trademarks</p>
				<div class="flex items-center gap-10 pt-6">
					{#each internationalTrademarks as item}
						<p class="bg-white px-6 py-2 font-bold">{item}</p>
					{/each}
				</div>
			</div>
		{/if}
		<div class="pt-12">
			<p class="text-2xl font-bold">Application Details</p>
			<div class="grid lg:grid-cols-3 gap-8 pt-10">
				{#each lineItems as item}
					<div class="bg-white p-10 space-y-4">
						<div>
							<p><span class="font-bold">Class:</span> {item.class}</p>
						</div>
						<div>
							<p class="font-bold">Descriptions:</p>
							<ul class="list-disc ml-4 mt-4 space-y-2">
								{#each item.descriptions as el}
									<li>{el}</li>
								{/each}
							</ul>
						</div>
						<div class="space-y-2 border-t pt-6">
							<p><span class="font-bold">Gov. Fee:</span> ${item.price.government}</p>
							<p><span class="font-bold">Service Fee:</span> ${item.price.service}</p>
							<p><span class="font-bold">GST:</span> ${item.price.gst}</p>
							<p>
								<span class="font-bold">Total:</span> ${item.price.service +
									item.price.government +
									item.price.gst}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
