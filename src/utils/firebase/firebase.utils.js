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

export const addCollectionandDocuments =  async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newObjRef = collectionRef.doc();
        batch.set(newObjRef, obj);
    });

    return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map(doc => {

        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    }) 

    // [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    //     return accumulator + currentValue
    // }, 10)

    const transformedCollectionObject = transformedCollection.reduce((accumulator, collection) => {
        
        accumulator[collection.title.toLowerCase()] = collection;

        return accumulator;
    }, {});

    return transformedCollectionObject;
} 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 