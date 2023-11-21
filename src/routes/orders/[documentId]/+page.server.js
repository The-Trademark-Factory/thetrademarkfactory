import firebaseDb from '$lib/utils/firebase.js';

export async function load({ params }) {
	const { documentId } = params;

	const documentSnapshot = await firebaseDb.collection('applications').doc(documentId).get();

	if (!documentSnapshot.exists) {
		return { order: null };
	}

	const documentData = documentSnapshot.data();

	if (documentData.createdAt && documentData.createdAt.toDate instanceof Function) {
		documentData.createdAt = documentData.createdAt.toDate().toISOString();
	}

	return {
		order: documentData
	};
}
