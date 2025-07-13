import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: import.meta.env.VITE_OPENAI_KEY,
	dangerouslyAllowBrowser: true
});

export async function initOpenAi(companyName) {
	try {
		const query = `
  Analyze the company name "${companyName}" strictly based on the commonality of the words used in the name, and determine its trademarkability according to the following rules:
  - If the name contains only one or more common word, it is not trademarkable - always respond with "no". For example, "The Company" is not trademarkable.
  - If the name contains at least one common word and uncommon words, it might be trademarkable - respond with "maybe". For example, "Chocololol Chocolate" might be trademarkable.
  - If the name does not contain any common words, it is trademarkable - always respond with "yes". For example, "Chocololol" is trademarkable.
  Provide a response in JSON format with a "trademarkable" field having values "yes", "no", or "maybe", and a "comment" field explaining the reason for your choice, referring only to the presence or absence of common words in the name.
`;

		const response = await openai.chat.completions.create({
			model: 'gpt-4',
			temperature: 0.7,
			max_tokens: 150,
			messages: [
				{ role: 'system', content: 'You are a helpful assistant.' },
				{ role: 'user', content: query }
			]
		});
		console.log(response);
		if (response && response.choices && response.choices[0]) {
			const reply = response.choices[0].message.content;
			return reply;
		} else {
			throw new Error('Failed to get a valid response from the OpenAI API');
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}
