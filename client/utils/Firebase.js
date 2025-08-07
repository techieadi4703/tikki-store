import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tikki-store-login.firebaseapp.com",
  projectId: "tikki-store-login",
  storageBucket: "tikki-store-login.firebasestorage.app",
  messagingSenderId: "144167159878",
  appId: "1:144167159878:web:b0e3609266f507ffd0a247"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};