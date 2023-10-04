<script>
	import { MapPin, Phone, Send } from 'lucide-svelte';
	import footer from '../../../data/footer.json';
	import Button from './Button.svelte';
</script>

<footer class="bg-ttmfDarkGreen text-white">
	<div class="max-w-screen-xl mx-auto py-14 max-2xl:px-6">
		<div class="flex flex-wrap justify-between border-b-2 border-ttmfRed pb-12 mb-12">
			<a href="/"><img src="/upload/logo.png" alt="TTMF" /></a>
			<div class="flex flex-wrap gap-12 max-md:pt-12">
				<div class="inline-flex gap-6">
					<div
						class="w-12 h-12 rounded-full border-2 border-ttmfRed flex justify-center items-center">
						<MapPin size="20" />
					</div>
					<div class="flex flex-col gap-2 pt-3">
						<p>{footer.address.street}</p>
						<p>{footer.address.city}</p>
						<p>{footer.address.state}</p>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<div class="inline-flex gap-6">
						<div
							class="w-12 h-12 rounded-full border-2 border-ttmfRed flex justify-center items-center">
							<Phone size="20" />
						</div>
						<div class="flex flex-col gap-2 pt-3">
							<p>{footer.phone}</p>
						</div>
					</div>
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
		<div class="flex flex-wrap justify-between items-center">
			<div>
				<div class="flex gap-4">
					{#each footer.links as el}
						<a href={el.url}>{el.title}</a>
					{/each}
				</div>
				<div class="flex gap-2 text-sm pt-4">
					<p>{footer.copyright}</p>
					{#if footer.built.title}
						<a href={footer.built.url} target="_blank">{footer.built.title}</a>
					{/if}
				</div>
			</div>
			<div class="max-md:pb-12 max-md:pt-3 max-md:order-first">
				<Button title={footer.button.title} url={footer.button.url} />
			</div>
		</div>
	</div>
</footer>
