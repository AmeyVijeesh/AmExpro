import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVCrovNUMvFuPs5mfpwyuXgEYOUMDAFrQ",
  authDomain: "shop-14338.firebaseapp.com",
  projectId: "shop-14338",
  storageBucket: "shop-14338.appspot.com",
  messagingSenderId: "604570033608",
  appId: "1:604570033608:web:86685c11fa5aba1f5b74fd",
  measurementId: "G-GP4HS4ZCJ4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
