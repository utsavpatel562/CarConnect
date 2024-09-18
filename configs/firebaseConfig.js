// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carconnect-bbcd0.firebaseapp.com",
  projectId: "carconnect-bbcd0",
  storageBucket: "carconnect-bbcd0.appspot.com",
  messagingSenderId: "268227996122",
  appId: "1:268227996122:web:d77fc5de07907584a9b8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);