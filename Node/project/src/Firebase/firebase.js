// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpXm3FJHUvKHT5jvBddt5J9nw85zsOwY",
  authDomain: "ecom-aug25.firebaseapp.com",
  projectId: "ecom-aug25",
  storageBucket: "ecom-aug25.firebasestorage.app",
  messagingSenderId: "12863198324",
  appId: "1:12863198324:web:3074f09908a425db7d6d21",
  measurementId: "G-ZR9SXSREGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}