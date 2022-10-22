import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGDMTsGePw2H1--4B8ll3-_Rs6yoh8Ddo",
  authDomain: "chat-app-1cd17.firebaseapp.com",
  projectId: "chat-app-1cd17",
  storageBucket: "chat-app-1cd17.appspot.com",
  messagingSenderId: "432109562118",
  appId: "1:432109562118:web:e21ff346cc151368741687",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
