export const prerender = true;
import Filer from '@cloudcannon/filer';

export async function load() {
	const filer = new Filer({
		path: 'content'
	});

	const pages = await filer.getItems('pages');

	return {
		pages
	};
}
