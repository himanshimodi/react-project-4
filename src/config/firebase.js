// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEwkkxuz8Gjs3G1q8uWOLGtA69aaSsKK4",
  authDomain: "vite-contact-fa0aa.firebaseapp.com",
  projectId: "vite-contact-fa0aa",
  storageBucket: "vite-contact-fa0aa.appspot.com",
  messagingSenderId: "747895283643",
  appId: "1:747895283643:web:591d3b78dee8c2f62c6e9e",
  measurementId: "G-68P9S3TSY3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);