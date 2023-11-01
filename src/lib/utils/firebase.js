import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-BNL084SKd73fRDMpYASnjeAZDCA4ULc",
    authDomain: "ttmfapp.firebaseapp.com",
    projectId: "ttmfapp",
    storageBucket: "ttmfapp.appspot.com",
    messagingSenderId: "476592553528",
    appId: "1:476592553528:web:6ed5ffea611934e8db70cd",
    measurementId: "G-4ENS64NWL6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage()

const uploadImage = async (imageFile, email, createdAt) => {
    return new Promise((resolve, reject) => {
        const storageRef = storage.ref()

        const fileRef = storageRef.child(`search/${email}/${createdAt}.${imageFile.type.split('/').at(-1)}`)

        fileRef.put(imageFile).on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => { },
            (e) => {
                reject(e.message)
            },
            () => {
                resolve(fileRef.getDownloadURL())
            })
    })
}

export { db as default, uploadImage }
