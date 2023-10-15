import { getAuthToken } from '$lib/utils/getAuthTokenDev';

export async function load({ url }) {
	const searchTerm = url.searchParams.get('name');
	if (!searchTerm) {
		return {
			searchResults: {
				apiData: false
			}
		};
	}

	const words = searchTerm.split(' ');
	const rows = words.map((word) => ({
		op: 'AND',
		query: {
			statuses: ['PENDING_REGISTERED'],
			word: {
				text: word,
				type: 'PART'
			}
		}
	}));

	try {
		let token;
		if (import.meta.env.VITE_ENV_ADAPTER === 'netlify') {
			const res = await fetch('/.netlify/functions/getAuthToken');
			const data = await res.json();
			token = data.token;
		} else {
			token = await getAuthToken();
		}

		const apiRes = await fetch(import.meta.env.VITE_IPAUSPROD_URL + '/search/advanced', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				changedSinceDate: '',
				rows,
				sort: {
					field: 'NUMBER',
					direction: 'DESCENDING'
				}
			})
		});

		const apiData = await apiRes.json();

		if (apiData.count > 0) {
			const trademarkDetails = await Promise.all(
				apiData.trademarkIds.slice(0, 6).map(async (trademarkId) => {
					try {
						const res = await fetch(
							`${import.meta.env.VITE_IPAUSPROD_URL}/trade-mark/${trademarkId}`,
							{
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${token}`
								}
							}
						);
						return res.json();
					} catch (error) {
						console.error('Error fetching trademark details', error);
						return null;
					}
				})
			);
			apiData.trademarkDetails = trademarkDetails;
		}

		return {
			searchResults: {
				apiData,
				searchTerm
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
