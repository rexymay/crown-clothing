import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNEG2R1E4_ob7Wawt25ENdtQ4qrdx35is",
    authDomain: "crown-db-71444.firebaseapp.com",
    databaseURL: "https://crown-db-71444.firebaseio.com",
    projectId: "crown-db-71444",
    storageBucket: "crown-db-71444.appspot.com",
    messagingSenderId: "696140922306",
    appId: "1:696140922306:web:eb2c6100f0f50565ab2a5b",
    measurementId: "G-12SVDRSZS1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        console.log('ERROR: Empty userAuth Object', userAuth);
        return;
    }else{
        console.log('INFO: userAuth found', userAuth);
    }

    const userRef  = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        console.log('INFO: User does not exist, now creating...');
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(error){
            console.log('Error creating user', error.message);
        }
    }else{
        console.log('INFO: User snapShot already exist', snapShot);
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
