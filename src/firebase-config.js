// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBVNVb51mdVZo5AMEHc0zxlzOFGXKY7ZA",
  authDomain: "eatelevate-743be.firebaseapp.com",
  projectId: "eatelevate-743be",
  storageBucket: "eatelevate-743be.appspot.com",
  messagingSenderId: "754685465197",
  appId: "1:754685465197:web:4bcfc726214235c5932564",
  measurementId: "G-2RQRH3858P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();