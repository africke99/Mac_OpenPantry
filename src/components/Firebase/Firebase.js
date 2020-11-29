import app from '/components/App';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT11rbLsKYuMY-5UkpUoSDXzF69fqtlA8",
    authDomain: "mac-openpantry.firebaseapp.com",
    databaseURL: "https://mac-openpantry.firebaseio.com",
    projectId: "mac-openpantry",
    storageBucket: "mac-openpantry.appspot.com",
    messagingSenderId: "416762092381",
    appId: "1:416762092381:web:1e07aaabcab261597c26b4",
    measurementId: "G-TXMTXH0TTM"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);
      }
  }

  export default Firebase;