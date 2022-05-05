// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP5QLVGBFIEUI7Ojot1igC0y6Qj1KMK7s",
  authDomain: "listsomelists.firebaseapp.com",
  projectId: "listsomelists",
  storageBucket: "listsomelists.appspot.com",
  messagingSenderId: "418585344996",
  appId: "1:418585344996:web:30017d2c1b19d6d5ed25f1",
  measurementId: "G-3NPYT1005F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();