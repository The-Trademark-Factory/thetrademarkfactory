export async function getAuthToken() {
	try {
		const clientId = import.meta.env.VITE_IPAUSPROD_CLIENT_ID;
		const clientSecret = import.meta.env.VITE_IPAUSPROD_CLIENT_SECRET;

		const res = await fetch(
			'https://production.api.ipaustralia.gov.au/public/external-token-api/v1/access_token',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: new URLSearchParams({
					grant_type: 'client_credentials',
					client_id: clientId,
					client_secret: clientSecret
				})
			}
		);

		const data = await res.json();

		if (data.access_token) {
			console.log(data);
			return data.access_token;
		} else {
			throw new Error('Failed to fetch auth token');
		}
	} catch (error) {
		console.error('Error fetching auth token', error);
		throw error;
	}
}
