import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7mu5DEdXxuyxX_QWZEpOQY2JbEjUmIj8",
  authDomain: "madinahgate-a33b9.firebaseapp.com",
  projectId: "madinahgate-a33b9",
  storageBucket: "madinahgate-a33b9.firebasestorage.app",
  messagingSenderId: "43299957702",
  appId: "1:43299957702:web:d6b318a901c7f635d260c7",
  measurementId: "G-P9CP59V7V1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
