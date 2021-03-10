import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


var db;
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
db = firebase.firestore(app);

export function getLogsByUser(){

  var docRef = db.collection("users").doc("Bf3hwzwhhKNcRfjUoQBgLg2g4QR2").collection("logs");
  docRef.get().then((doc) =>{
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return (
    <div>
        <p>Hello</p>
    </div>
  );
};



export function writeUserData(){
  db.collection("logs").doc("Bf3hwzwhhKNcRfjUoQBgLg2g4QR2").collection("logs")
  .onSnapshot((doc) => {
    console.log("Current data: ", doc.data());
});
 
}
