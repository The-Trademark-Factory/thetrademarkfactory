import firebaseDb from '$lib/utils/firebase.js';

export async function load({ params }) {
    const { documentId } = params

    const document = await firebaseDb.collection("applications").doc(documentId).get()

    return {
        order: document.exists ? document.data() : null
    }
}
