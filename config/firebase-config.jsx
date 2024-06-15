// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDolobtVq9lCYTPG1KP3iRp355Ztfyl-FA",
  authDomain: "repulsive-sky.firebaseapp.com",
  projectId: "repulsive-sky",
  storageBucket: "repulsive-sky.appspot.com",
  messagingSenderId: "513436898112",
  appId: "1:513436898112:web:04cd8159b257beb9fde0a5",
  measurementId: "G-9Q3J8H2W5E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)