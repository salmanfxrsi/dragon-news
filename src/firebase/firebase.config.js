// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDczuYFK0EqN9s7kZ9enZnGrkDuw3xYU",
  authDomain: "dragon-news-8fca0.firebaseapp.com",
  projectId: "dragon-news-8fca0",
  storageBucket: "dragon-news-8fca0.firebasestorage.app",
  messagingSenderId: "336116347283",
  appId: "1:336116347283:web:e477201be79ca9f5223866",
  measurementId: "G-H0SKV4XYSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);