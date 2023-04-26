// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDPbZxPVCZhSGk8_iDT_FnUuELG3pBsWM",
  authDomain: "chat-app-1cd0f.firebaseapp.com",
  projectId: "chat-app-1cd0f",
  storageBucket: "chat-app-1cd0f.appspot.com",
  messagingSenderId: "141434069413",
  appId: "1:141434069413:web:3c22dce3298cfc67d3084c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)