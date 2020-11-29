import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDT11rbLsKYuMY-5UkpUoSDXzF69fqtlA8",
    authDomain: "mac-openpantry.firebaseapp.com",
    databaseURL: "https://mac-openpantry.firebaseio.com",
    projectId: "mac-openpantry",
    storageBucket: "mac-openpantry.appspot.com",
    messagingSenderId: "416762092381",
    appId: "1:416762092381:web:1e07aaabcab261597c26b4",
    measurementId: "G-TXMTXH0TTM"
  });

const db = firebaseApp.firestore();
export { db };