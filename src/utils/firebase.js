// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnbW2Un8u5Ygo4e6lq9Jfft9iA-EbJDJU",
  authDomain: "cinema-app-66d0a.firebaseapp.com",
  projectId: "cinema-app-66d0a",
  storageBucket: "cinema-app-66d0a.appspot.com",
  messagingSenderId: "1020762999149",
  appId: "1:1020762999149:web:1b51b445e265852d8a3264",
  measurementId: "G-2XYW4MQN1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
