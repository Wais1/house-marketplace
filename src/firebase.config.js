import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuerQRLRiyjZ0nDQVStl2kv6yy4S6kqkU",
  authDomain: "house-market-p.firebaseapp.com",
  projectId: "house-market-p",
  storageBucket: "house-market-p.appspot.com",
  messagingSenderId: "14053652714",
  appId: "1:14053652714:web:62c15037dae7e425c27f93"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()