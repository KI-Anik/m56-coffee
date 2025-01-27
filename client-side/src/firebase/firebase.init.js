// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzfWu6KbVUoD8xQXDa73GY0Aeat5K_8h0",
  authDomain: "phero-4add4.firebaseapp.com",
  projectId: "phero-4add4",
  storageBucket: "phero-4add4.firebasestorage.app",
  messagingSenderId: "715544846283",
  appId: "1:715544846283:web:8625f9dc16279eae95604e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);