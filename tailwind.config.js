/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './component-library/components/**/*.svelte'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
