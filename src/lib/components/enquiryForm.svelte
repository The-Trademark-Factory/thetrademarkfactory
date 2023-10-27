<script>
	export let endpoint, button, type, countries, total;
</script>

<form action={endpoint} method="POST" class="space-y-6">
	{#if type === 'international'}
		<input
			hidden
			type="text"
			id="countries"
			name="Selected Countries"
			value={countries.join(', ')} />
		<input hidden type="text" id="price" name="Estimated Total" value="${total}" />
	{/if}
	<div>
		<label for="fullName" class="block text-sm font-bold uppercase text-ttmfRed">Full Name*</label>
		<input
			required
			id="fullName"
			name="Full Name"
			type="text"
			class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
	</div>

	<div>
		<label for="email" class="block text-sm font-bold uppercase text-ttmfRed">Email*</label>
		<input
			required
			id="email"
			type="email"
			name="Email"
			class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
	</div>

	<div>
		<label for="phoneNumber" class="block text-sm font-bold uppercase text-ttmfRed"
			>Phone Number</label>
		<input
			id="phoneNumber"
			type="tel"
			name="Phone Number"
			class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
	</div>

	<div>
		<label for="message" class="block text-sm font-bold uppercase text-ttmfRed">Message*</label>
		<textarea
			required
			id="message"
			name="Message"
			rows="8"
			class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
	</div>

	<button type="submit" class="bg-ttmfRed text-white p-4 font-bold w-full">
		{button}
	</button>
</form>
