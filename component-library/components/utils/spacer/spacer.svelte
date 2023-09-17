<script>
	export let padding, background, disable_mobile;
</script>

<div
	class="{padding === '3'
		? 'py-2 md:py-3'
		: padding === '6'
		? 'py-4 md:py-6'
		: padding === '10'
		? 'py-6 md:py-8 lg:py-10'
		: padding === '12'
		? 'py-8 md:py-10 lg:py-12'
		: padding === '16'
		? 'py-9 md:py-12 lg:py-16'
		: 'py-10 md:py-14 lg:py-20'} {background === 'white' ? 'bg-white' : ''} {disable_mobile
		? 'max-lg:hidden'
		: ''}"
/>
