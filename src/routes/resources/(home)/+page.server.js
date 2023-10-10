export const prerender = true;
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
