import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVE2MzklbNsAWISlwuyoR9z1LU0J4dsJ0",
  authDomain: "facebook-clone-cec98.firebaseapp.com",
  databaseURL: "https://facebook-clone-cec98.firebaseio.com",
  projectId: "facebook-clone-cec98",
  storageBucket: "facebook-clone-cec98.appspot.com",
  messagingSenderId: "444123979597",
  appId: "1:444123979597:web:79443e0adf5f372e3be104",
  measurementId: "G-8BC83RRS0K",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
