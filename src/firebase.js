// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6LOcL4nyIfv6O4NIk3s2rZxoJrnY7fm0",
  authDomain: "kitchen-creation-7ca1a.firebaseapp.com",
  projectId: "kitchen-creation-7ca1a",
  storageBucket: "kitchen-creation-7ca1a.firebasestorage.app",
  messagingSenderId: "388331681497",
  appId: "1:388331681497:web:51f0124c9a52918871b0c8",
  measurementId: "G-566Z2ELE0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth = getAuth();
export default app;