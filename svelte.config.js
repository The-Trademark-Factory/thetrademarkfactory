import adapterStatic from '@sveltejs/adapter-static';
import adapterNetlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter:
			process.env.VITE_ENV_ADAPTER === 'cloudcannon'
				? adapterStatic({ strict: false })
				: adapterNetlify(),
		prerender: {
			handleHttpError: 'warn',
			entries: ['*', '/sitemap/', '/sitemap.xml']
		}
	},
	preprocess: vitePreprocess()
};

export default config;
