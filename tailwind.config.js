/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './component-library/components/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Century Gothic', 'sans-serif']
		},
		extend: {
			fontFamily: {
				arkina: ['Arkina', 'sans-serif']
			},
			colors: {
				ttmfRed: '#D34B44',
				ttmfDarkGreen: '#153438',
				ttmfGreen: '#497B81',
				ttmfLightGreen: '#385961',
				ttmfLightTextGreen: '#80BCC3',
				ttmfBlack: '#142023',
				ttmfCreme: '#CCB6A8',
				ttmfBrown: '#E3D0C1',
				ttmfBeige: '#F4F0ED',
				ttmfBg: '#F9F7F6',
				ttmfBgLight: '#F4F0ED'
			},
			maxWidth: {
				'8xl': '1800px',
				'9xl': '2543px'
			},
			boxShadow: {
				pricingShadow: '0px 3px 20px 0px rgba(21, 52, 56, 0.05);'
			},
			inset: {
				headerOverflow: 'calc(50% - (1280px / 2))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
