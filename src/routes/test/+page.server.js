export async function load() {
	try {
		const clientId = import.meta.env.VITE_IPAUSTEST_CLIENT_ID;
		const clientSecret = import.meta.env.VITE_IPAUSTEST_CLIENT_SECRET;

		console.log('Client ID:', clientId);
		console.log('Client Secret:', clientSecret);

		const res = await fetch(
			'https://test.api.ipaustralia.gov.au/public/external-token-api/v1/access_token',
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

		if (!res.ok) {
			console.error('Response status:', res.status);
			console.error('Response status text:', res.statusText);
		}

		const data = await res.json();
		console.log('Response data:', data);

		if (data.access_token) {
			return data.access_token;
		} else {
			throw new Error('Failed to fetch auth token');
		}
	} catch (error) {
		console.error('Error fetching auth token', error);
		throw error;
	}
}
