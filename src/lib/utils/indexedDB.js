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
		const request = store.put({ id: 'logo', imageFile }); // I've changed this to put, in case you want to update
		request.onsuccess = () => {
			console.log('Image saved successfully');
			resolve();
		};
		request.onerror = (event) => {
			console.log("Couldn't save image", event);
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
				console.log('Image retrieved successfully');
				resolve(request.result.imageFile);
			} else {
				console.log('No image found');
				resolve(null);
			}
		};
		request.onerror = (event) => {
			console.log("Couldn't get image", event);
			reject("Couldn't get image");
		};
	});
}

export function deleteImage(db) {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(['uploadedLogo'], 'readwrite');
		const store = transaction.objectStore('uploadedLogo');
		const request = store.delete('logo');
		request.onsuccess = () => resolve();
		request.onerror = () => reject("Couldn't delete image");
	});
}
