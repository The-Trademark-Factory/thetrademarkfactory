export function openDB() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('ttmfDB', 1);
		request.onerror = () => reject("Couldn't open IndexedDB");
		request.onsuccess = () => resolve(request.result);
		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			db.createObjectStore('uploadedLogo', { keyPath: 'id' });
		};
	});
}

export function saveImage(db, imageFile) {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(['uploadedLogo'], 'readwrite');
		const store = transaction.objectStore('uploadedLogo');
		const request = store.put({ id: 'logo', imageFile });
		request.onsuccess = () => {
			resolve();
		};
		request.onerror = () => {
			reject("Couldn't save image");
		};
	});
}

export function getImage(db) {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(['uploadedLogo'], 'readonly');
		const store = transaction.objectStore('uploadedLogo');
		const request = store.get('logo');
		request.onsuccess = () => {
			if (request.result?.imageFile) {
				resolve(request.result.imageFile);
			} else {
				resolve(null);
			}
		};
		request.onerror = () => {
			reject("Couldn't get image");
		};
	});
}

export function deleteImage() {
	return new Promise((resolve, reject) => {
		const deleteRequest = indexedDB.deleteDatabase('ttmfDB');
		deleteRequest.onsuccess = () => {
			openDB()
				.then((db) => {
					resolve(db);
				})
				.catch((err) => {
					reject('Could not reinitialize database:', err);
				});
		};
		deleteRequest.onerror = () => {
			reject("Couldn't delete database");
		};
	});
}
