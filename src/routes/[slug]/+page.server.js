export const prerender = true;
export const trailingSlash = 'always';
import { error } from '@sveltejs/kit';
import { get } from '$lib/utils/routing';

export async function load({ params }) {
	const slug = params.slug || 'index';
	const res = await get(`pages/${slug}`);

	if (res.status === 200) {
		return res.data;
	}
	throw error(res.status, 'Not found');
}
