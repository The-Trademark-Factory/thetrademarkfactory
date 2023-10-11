import { getAuthToken } from '$lib/utils/getAuthTokenDev';

// export async function load({ url }) {
// 	const searchTerm = url.searchParams.get('class');
// 	if (!searchTerm) {
// 		return {
// 			searchResults: {
// 				apiData: false
// 			}
// 		};
// 	}
// 	try {
// 		let token;
// 		if (import.meta.env.VITE_ENV_ADAPTER === 'netlify') {
// 			const res = await fetch('/.netlify/functions/getAuthToken');
// 			const data = await res.json();
// 			token = data.token;
// 		} else {
// 			token = await getAuthToken();
// 		}

// 		const apiRes = await fetch(
// 			'https://test.api.ipaustralia.gov.au/public/tmgns-search-api/v1/search?searchTerm=' +
// 				searchTerm,
// 			{
// 				method: 'GET',
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Authorization: `Bearer ${token}`
// 				}
// 			}
// 		);

// 		const apiData = await apiRes.json();

// 		return {
// 			searchResults: {
// 				apiData,
// 				searchTerm
// 			}
// 		};
// 	} catch (error) {
// 		console.error('Error in load function', error);
// 		return {
// 			status: 500,
// 			error: new Error('An error occurred while fetching the data')
// 		};
// 	}
// }

export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		const term = data.get('term');

		try {
			let token;
			if (import.meta.env.VITE_ENV_ADAPTER === 'netlify') {
				const res = await fetch('/.netlify/functions/getAuthToken');
				const data = await res.json();
				token = data.token;
			} else {
				token = await getAuthToken();
			}

			// production - https://production.api.ipaustralia.gov.au/public/tmgns-rest-api/v1/

			const apiRes = await fetch(
				'https://test.api.ipaustralia.gov.au/public/tmgns-search-api/v1/search?searchTerm=' + term,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}
				}
			);

			const apiData = await apiRes.json();

			return {
				searchResults: {
					apiData,
					term
				}
			};
		} catch (error) {
			console.error('Error in load function', error);
			return {
				status: 500,
				error: new Error('An error occurred while fetching the data')
			};
		}
	}
};
