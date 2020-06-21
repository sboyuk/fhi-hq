import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBV1GPe4GRtkNEEZUmOnql674b3YWwJS5U",
    authDomain: "fhi-hq.firebaseapp.com",
    databaseURL: "https://fhi-hq.firebaseio.com",
    projectId: "fhi-hq",
    storageBucket: "fhi-hq.appspot.com",
    messagingSenderId: "623800032959",
    appId: "1:623800032959:web:5c0a01fbd2e7df0194300a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exits) {
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;