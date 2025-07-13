<script>
	import { ArrowRight } from 'lucide-svelte';
	import Svg from '$lib/components/Svg.svelte';

	export let title, testimonials;
	let currentIndex = 0;

	function nextTestimonial() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}
</script>

<section class="max-w-screen-xl mx-auto grid lg:grid-cols-4 py-10 lg:py-16 max-2xl:px-6">
	<div class="lg:border-r lg:pr-12 max-sm:flex max-sm:items-end">
		<div>
			<Svg name="quote" />
			<h2 class="styleTitle pt-6">
				{@html title}
			</h2>
		</div>
		<div class="sm:pt-12 flex items-center gap-2">
			<button
				class="bg-ttmfBlack transition-all hover:bg-ttmfRed rounded-full p-2 sm:p-4 mb-2"
				on:click={nextTestimonial}
				><ArrowRight color="#FFFFFF" /><span class="sr-only">Next Testimonial</span></button>
		</div>
	</div>
	<div class="lg:col-span-3 lg:pl-16 max-sm:pt-12">
		<div>
			<p class="text-lg text-ttmfDarkGreen">{testimonials[currentIndex].description}</p>
			<div class="pt-6 md:pt-10 flex items-center gap-6">
				<img
					src={testimonials[currentIndex].icon}
					alt="{testimonials[currentIndex].name} Logo"
					width="128"
					height="40"
					class="w-32 object-contain max-sm:hidden" />
				<div>
					<p class="text-xl font-bold text-ttmfBlack">{testimonials[currentIndex].name}</p>
					<p class="text-sm font-bold text-ttmfLightTextGreen uppercase pt-2">
						{testimonials[currentIndex].position}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
