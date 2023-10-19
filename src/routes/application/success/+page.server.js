import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
    // Redirect if "str" url param is not present
    const secretString = url.searchParams.get('str')
    if (!secretString) throw redirect(303, '/')

    // Redirect if "str" is malformed
    let decoded
    try {
        decoded = Buffer.from(secretString, 'base64').toString('utf8').split('-')
        if (decoded[1] !== import.meta.env.VITE_SECRET_STRING) throw redirect(303, '/')
    } catch (e) {
        throw redirect(303, '/')
    }

    const issueingTime = +decoded[0]
    const now = new Date().getTime()

    // Redirect if the secret is more than 30 minutes old
    if (now - issueingTime > 30 * 60 * 1000) throw redirect(303, '/')
}
