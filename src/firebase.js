// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
    
  };
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  
