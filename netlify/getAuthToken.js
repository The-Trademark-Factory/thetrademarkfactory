require('dotenv').config();
const fetch = require('node-fetch');

let token;
let expiryTime = 0;

exports.handler = async function () {
	const currentTime = Date.now();

	if (!token || currentTime >= expiryTime) {
		const response = await fetch(
			'https://test.api.ipaustralia.gov.au/public/external-token-api/v1/access_token',
			{
				method: 'POST',
				body: new URLSearchParams({
					grant_type: 'client_credentials',
					client_id: process.env.VITE_IPAUSTEST_CLIENT_ID,
					client_secret: process.env.VITE_IPAUSTEST_CLIENT_SECRET
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		);

		const data = await response.json();

		token = data.access_token;
		expiryTime = currentTime + data.expires_in * 1000 - 60 * 1000; // 60 seconds buffer
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ token })
	};
};
