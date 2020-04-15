import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC6LFUZEssxY020eDGZjhUD4o3WDHq5s_A",
    authDomain: "ahmeds-garments-store.firebaseapp.com",
    databaseURL: "https://ahmeds-garments-store.firebaseio.com",
    projectId: "ahmeds-garments-store",
    storageBucket: "ahmeds-garments-store.appspot.com",
    messagingSenderId: "4282366566",
    appId: "1:4282366566:web:9fb00862153c87ee9c8ba7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error message:", error.message);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 