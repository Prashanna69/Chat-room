// Firebase is used for the authentication purpose

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBwmPyyVJHstM5yTQy-m1Io3jx6IfUfMw",
  authDomain: "chat-room-58bcf.firebaseapp.com",
  projectId: "chat-room-58bcf",
  storageBucket: "chat-room-58bcf.appspot.com",
  messagingSenderId: "166021160976",
  appId: "1:166021160976:web:837d6e44c3f5e1e8206a95",
  measurementId: "G-8B5C1GHXDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
