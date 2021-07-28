// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAYiKtplrknBT271EiQyTXo1HsaAUoVUeo",
    authDomain: "clone-bbc95.firebaseapp.com",
    projectId: "clone-bbc95",
    storageBucket: "clone-bbc95.appspot.com",
    messagingSenderId: "890759298759",
    appId: "1:890759298759:web:0505ec0c4738ca71adc8e2",
    measurementId: "G-GL23KX5LSH",
  };
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  