import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_SECRET!,
  authDomain: "chatgpt-messenger-1db44.firebaseapp.com",
  projectId: "chatgpt-messenger-1db44",
  storageBucket: "chatgpt-messenger-1db44.appspot.com",
  messagingSenderId: "436131323687",
  appId: "1:436131323687:web:96963a995a751383725302",
};

// Singleton Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
