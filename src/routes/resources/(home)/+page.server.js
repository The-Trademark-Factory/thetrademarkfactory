export const prerender = true;
export const trailingSlash = 'always';
import Filer from '@cloudcannon/filer';

export async function load() {
	const filer = new Filer({
		path: 'content'
	});

	const articles = await filer.getItems('resources', { sortKey: 'date' });

	return {
		articles
	};
}
