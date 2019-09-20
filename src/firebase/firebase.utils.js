import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWUUYeYUt4N2DfIMWO7NNyh2QBx-ITm6g",
    authDomain: "crwn-db-d4c1e.firebaseapp.com",
    databaseURL: "https://crwn-db-d4c1e.firebaseio.com",
    projectId: "crwn-db-d4c1e",
    storageBucket: "",
    messagingSenderId: "79587227479",
    appId: "1:79587227479:web:fede91e312c8f2a1c07012"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;