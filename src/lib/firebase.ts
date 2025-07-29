// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlH3_L0BurKxO7Y2w7pdMu4xJBFmrbsOE",
  authDomain: "cor-ai-chat.firebaseapp.com",
  projectId: "cor-ai-chat",
  storageBucket: "cor-ai-chat.firebasestorage.app",
  messagingSenderId: "105088078148",
  appId: "1:105088078148:web:e0502aaadff859fb00c711",
  measurementId: "G-4T418TEPGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services (client-side only)
let analytics: Analytics | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;
let storage: FirebaseStorage | null = null;

// Only initialize services on the client side
if (typeof window !== 'undefined') {
  // Initialize Firestore
  db = getFirestore(app);
  
  // Initialize Auth
  auth = getAuth(app);
  
  // Initialize Storage
  storage = getStorage(app);
  
  // Initialize Analytics only if supported
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics, db, auth, storage };
