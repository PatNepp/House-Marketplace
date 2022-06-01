import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nspAws6uiYRK2popJ5Emj9x3YEzoMAM",
  authDomain: "house-marketplace-4c0e3.firebaseapp.com",
  projectId: "house-marketplace-4c0e3",
  storageBucket: "house-marketplace-4c0e3.appspot.com",
  messagingSenderId: "390427800978",
  appId: "1:390427800978:web:2022651b226195b22efd4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()