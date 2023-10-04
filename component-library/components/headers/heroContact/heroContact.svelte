<script>
	import { MapPin, Phone, Send } from 'lucide-svelte';
	import footer from '../../../../data/footer.json';
	export let title, subtitle, image, form;
</script>

<section
	class="relative bg-gradient-to-b from-ttmfDarkGreen from-20% to-20% lg:from-45% lg:to-45% to-white">
	<div class="relative z-10 max-w-screen-xl mx-auto pt-44 md:pt-52 pb-28 px-6">
		<div class="grid lg:grid-cols-2 gap-10 md:gap-24">
			<div>
				<div class="relative pb-20 md:pb-36">
					<h1 class="text-6xl lg:text-8xl xl:text-9xl font-bold flex flex-col text-white">
						{title}
					</h1>
					{#if subtitle}
						<p class="text-4xl font-arkina text-ttmfRed pt-9">{subtitle}</p>
					{/if}
					<div class="absolute -bottom-5 right-0 max-md:w-1/3">
						<img src={image} alt="Send email" />
					</div>
				</div>
				<div class="flex flex-col divide-y-2 divide-ttmfRed">
					<div class="inline-flex gap-6 py-8">
						<div
							class="w-12 h-12 rounded-full border-2 border-ttmfRed flex justify-center items-center">
							<MapPin size="20" />
						</div>
						<div class="flex flex-col font-bold gap-2 pt-3">
							<p>{footer.address.street}</p>
							<p>{footer.address.city}</p>
							<p>{footer.address.state}</p>
						</div>
					</div>
					<div class="font-bold py-8">
						<p class="text-ttmfRed pb-4">Call Us</p>
						<div class="inline-flex gap-6">
							<div
								class="w-12 h-12 rounded-full border-2 border-ttmfRed flex justify-center items-center">
								<Phone size="20" />
							</div>
							<div class="flex flex-col gap-2 pt-3">
								<p>{footer.phone}</p>
							</div>
						</div>
					</div>
					<div class="font-bold py-8">
						<p class="text-ttmfRed pb-4">Email Us</p>
						<div class="inline-flex gap-6">
							<div
								class="w-12 h-12 rounded-full border-2 border-ttmfRed flex justify-center items-center">
								<Send size="20" />
							</div>
							<div class="flex flex-col gap-2 pt-3">
								<p>{footer.email}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="bg-white px-12 pt-6 pb-12 rounded-2xl shadow-2xl md:shadow-xl">
					<p class="text-5xl font-arkina text-ttmfRed pt-9">{form.title}</p>
					<div class="pt-12">
						<form class="space-y-6">
							<div>
								<label for="fullName" class="block text-sm font-bold uppercase text-ttmfRed"
									>Full Name*</label>
								<input
									required
									id="fullName"
									type="text"
									class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
							</div>

							<div>
								<label for="email" class="block text-sm font-bold uppercase text-ttmfRed"
									>Email*</label>
								<input
									required
									id="email"
									type="email"
									class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
							</div>

							<div>
								<label for="phoneNumber" class="block text-sm font-bold uppercase text-ttmfRed"
									>Phone Number</label>
								<input
									id="phoneNumber"
									type="tel"
									class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
							</div>

							<div>
								<label for="message" class="block text-sm font-bold uppercase text-ttmfRed"
									>Message*</label>
								<textarea
									required
									id="message"
									rows="8"
									class="mt-1 p-2 w-full border-2 border-ttmfCreme/30 bg-ttmfBg rounded-sm text-ttmfBlack" />
							</div>

							<button type="submit" class="bg-ttmfRed text-white p-4 font-bold w-full">
								{form.button}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
