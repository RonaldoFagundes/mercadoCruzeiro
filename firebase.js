import firebase from 'firebase';
import 'firebase/firestore';



var firebaseConfig = {
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


export default {
    db, firebase
}