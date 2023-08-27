// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHYRAvW_6nDdQ9CwgEsGSDgweevle6wyE",
  authDomain: "acea-1400b.firebaseapp.com",
  projectId: "acea-1400b",
  storageBucket: "acea-1400b.appspot.com",
  messagingSenderId: "983317418647",
  appId: "1:983317418647:web:aa3328b73eef7aaebccfd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
