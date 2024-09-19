// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carconnect-50e06.firebaseapp.com",
  projectId: "carconnect-50e06",
  storageBucket: "carconnect-50e06.appspot.com",
  messagingSenderId: "598148555276",
  appId: "1:598148555276:web:5a30911ef71310c6544429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);