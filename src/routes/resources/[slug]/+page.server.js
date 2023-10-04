import Filer from '@cloudcannon/filer';
import { get } from '$lib/utils/routing';

export async function load({ params }) {
	const filename = `/resources/${params.slug}`;
	const res = await get(filename);
	const pageDetails = res.data;

	const filer = new Filer({
		path: 'content'
	});

	const articles = await filer.getItems('resources', { sortKey: 'date' });
	const recommendedArticles = articles.slice(0, 3);

	return {
		pageDetails,
		recommendedArticles
	};
}
