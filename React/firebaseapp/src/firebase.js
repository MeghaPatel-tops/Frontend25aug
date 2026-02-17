import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

// Export firestore database
export const db = getFirestore(app);