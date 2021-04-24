// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYiKtplrknBT271EiQyTXo1HsaAUoVUeo",
  authDomain: "clone-bbc95.firebaseapp.com",
  projectId: "clone-bbc95",
  storageBucket: "clone-bbc95.appspot.com",
  messagingSenderId: "890759298759",
  appId: "1:890759298759:web:0505ec0c4738ca71adc8e2",
  measurementId: "G-GL23KX5LSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
