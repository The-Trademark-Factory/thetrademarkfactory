import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$bookshop: resolve('./component-library/'),
			'@content': resolve('./content/'),
			'@data': resolve('./data/')
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});
