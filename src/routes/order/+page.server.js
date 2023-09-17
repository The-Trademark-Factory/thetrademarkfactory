import { getAuthToken } from '$lib/utils/getAuthTokenDev';

export async function load() {
	try {
		let token;
		if (import.meta.env.VITE_ENV_ADAPTER === 'netlify') {
			// Fetch the auth token from the Netlify function
			const res = await fetch('/.netlify/functions/getAuthToken');
			const data = await res.json();
			token = data.token;
		} else {
			token = await getAuthToken();
		}

		// Make the authenticated API request with the token
		const apiRes = await fetch(import.meta.env.VITE_IPAUSTEST_URL + '/search/quick', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				changedSinceDate: '2019-01-15',
				filters: {
					quickSearchType: ['WORD'],
					status: ['REGISTERED']
				},
				query: 'TEST',
				sort: {
					direction: 'ASCENDING',
					field: 'NUMBER'
				}
			})
		});

		const apiData = await apiRes.json();

		// Pass the API response data to the page as a prop
		return {
			props: {
				apiData
			}
		};
	} catch (error) {
		console.error('Error in load function', error);

		// Handle the error gracefully by returning a 500 status and an error message
		return {
			status: 500,
			error: new Error('An error occurred while fetching the data')
		};
	}
}
