// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7ms4XukKVKPrOubS2lEcywh382M6SMc",
  authDomain: "realtor-clone-b160c.firebaseapp.com",
  projectId: "realtor-clone-b160c",
  storageBucket: "realtor-clone-b160c.appspot.com",
  messagingSenderId: "1090318503864",
  appId: "1:1090318503864:web:29764bb2c47c028f4a094d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
