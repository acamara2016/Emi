import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
const app = firebase.initializeApp ({
    apiKey: "AIzaSyD1gDP7SY5J5IXuHxqhIPGT_tXmWlpOfsI",
    authDomain: "emi-sweb.firebaseapp.com",
    databaseURL: "https://emi-sweb-default-rtdb.firebaseio.com",
    projectId: "emi-sweb",
    storageBucket: "emi-sweb.appspot.com",
    messagingSenderId: "54635582580",
    appId: "1:54635582580:web:facba273a32b31d8d96d21",
    measurementId: "G-11B0SRBZB0"
  });

export default app;
