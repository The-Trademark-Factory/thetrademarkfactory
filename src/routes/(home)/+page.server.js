export const prerender = true;
export const trailingSlash = 'always';
import { error } from '@sveltejs/kit';
import { get } from '$lib/utils/routing';

export async function load() {
	const response = await get('pages/index');
	const content = response.data;

	if (response.status === 200) {
		return { content };
	}
	throw error(response.status, 'Not found');
}
