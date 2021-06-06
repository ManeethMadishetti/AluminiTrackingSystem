
import firebase from "firebase";
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAy9XC1bTY62GKJLIGmnP-ik423EhPwEAY",
    authDomain: "alumni-tracking-system-d618e.firebaseapp.com",
    projectId: "alumni-tracking-system-d618e",
    storageBucket: "alumni-tracking-system-d618e.appspot.com",
    messagingSenderId: "182484540074",
    appId: "1:182484540074:web:27e2ef99f54f49f7a20ed3",
    measurementId: "G-EM6XDD70M8"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
export {firebase,db};