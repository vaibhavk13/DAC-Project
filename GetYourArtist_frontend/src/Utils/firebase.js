// src/Utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD_hP7z3OgDsQNw478xmzyOvD0ZErE9k0",
  authDomain: "get-your-artist.firebaseapp.com",
  projectId: "get-your-artist",
  storageBucket: "get-your-artist.appspot.com",
  messagingSenderId: "894982694582",
  appId: "1:894982694582:web:1fb6ba7fdf4f775eb02817",
  measurementId: "G-VCH3G9BE6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics, signInWithEmailAndPassword, createUserWithEmailAndPassword };
