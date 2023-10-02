
import {getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSkAInpoil0f5epUALDHYebC_emx6GCU8",
  authDomain: "auth-moha-milon-526fa.firebaseapp.com",
  projectId: "auth-moha-milon-526fa",
  storageBucket: "auth-moha-milon-526fa.appspot.com",
  messagingSenderId: "1018654118265",
  appId: "1:1018654118265:web:8a9a8d162f317f26b9dfa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;