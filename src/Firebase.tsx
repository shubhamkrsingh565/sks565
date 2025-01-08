// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsyElf1pzCIbeqZx6nMRwaE1WGdtEODv8",
  authDomain: "porfolio-7c180.firebaseapp.com",
  projectId: "porfolio-7c180",
  storageBucket: "porfolio-7c180.firebasestorage.app",
  messagingSenderId: "1010320769864",
  appId: "1:1010320769864:web:896f834fc7437c8c8a297d",
  measurementId: "G-C1KVTEQXVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);