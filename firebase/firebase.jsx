// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2yyseEpXQIj1XcnZ8a0ewPRfAkbNZa1Y",
  authDomain: "cozy-flix.firebaseapp.com",
  projectId: "cozy-flix",
  storageBucket: "cozy-flix.appspot.com",
  messagingSenderId: "323440581664",
  appId: "1:323440581664:web:e065eecf990ad54ba1b045",
  measurementId: "G-7NRWXKNVV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
export {app, auth}