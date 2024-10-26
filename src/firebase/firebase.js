// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9EeEjIGUoEC5bBasvU0jrHYTHAt7gmi8",
  authDomain: "lambonboarding.firebaseapp.com",
  projectId: "lambonboarding",
  storageBucket: "lambonboarding.appspot.com",
  messagingSenderId: "321064304938",
  appId: "1:321064304938:web:dc70ff0e1cdd0f106f5e53",
  measurementId: "G-W9ZFH318DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };