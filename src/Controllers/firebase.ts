import { initializeApp } from "firebase/app";
import "firebase/functions";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from 'firebase/messaging'

export let firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // databaseURL: process.env.REACT_APP_databaseURL,
};

export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});
export const auth = getAuth(app);
export const storage = getStorage(app);
export const dbTimestamp = () => serverTimestamp();
export const messaging = getMessaging(app);