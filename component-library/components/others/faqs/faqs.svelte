<script>
	import { beforeNavigate } from '$app/navigation';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import AnimatedSvg from '$lib/components/AnimatedSvg.svelte';

	export let title, faq;

	let openItem = null;

	const handleClick = (item) => () => {
		openItem = openItem === item ? null : item;
	};

	let visible = false;
	let showAnimation = true;

	beforeNavigate(() => {
		showAnimation = false;
	});
</script>

<section
	data-intersect
	on:intersect={(e) => (visible = e.detail.isIntersecting)}
	class="py-10 lg:py-16">
	<div class="max-w-screen-xl mx-auto bg-ttmfBrown/30 rounded-2xl">
		<div class="grid lg:grid-cols-4 px-6 lg:px-16">
			<div class="lg:pb-24">
				{#if showAnimation}
					<div class="max-lg:hidden">
						<AnimatedSvg name="bulb" {visible} />
					</div>
				{/if}
				<h2 class="styleTitle pt-12">
					{@html title}
				</h2>
			</div>
			<div class="lg:col-span-3 lg:pl-12 flex flex-col gap-4 py-16">
				{#each faq as el}
					<AccordionItem
						title={el.question}
						active={openItem === el.question}
						onClick={handleClick(el.question)}>
						{@html el.answer}
					</AccordionItem>
				{/each}
			</div>
		</div>
	</div>
</section>
