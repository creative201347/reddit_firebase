import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNs5SwY30HFDLkpzqGPhb9dmXnkzWEFA4",
  authDomain: "reddit-firebase-ab6db.firebaseapp.com",
  projectId: "reddit-firebase-ab6db",
  storageBucket: "reddit-firebase-ab6db.appspot.com",
  messagingSenderId: "342748877296",
  appId: "1:342748877296:web:c844bb66f5828f01510d35",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
