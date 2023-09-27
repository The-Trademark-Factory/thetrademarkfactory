<script>
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import Svg from '../../../../src/lib/components/Svg.svelte';

	export let title, faq;

	let openItem = null;

	const handleClick = (item) => () => {
		openItem = openItem === item ? null : item;
	};
</script>

<section class="py-16">
	<div class="max-w-screen-xl mx-auto bg-ttmfBrown/30 rounded-2xl">
		<div class="grid lg:grid-cols-4 px-6 lg:px-16">
			<div class="lg:pb-24">
				<div class="max-lg:hidden">
					<Svg name="bulb" style="ml-6" />
				</div>
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
