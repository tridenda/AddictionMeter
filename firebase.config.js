import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSB403aNCofAdarWfs3SDNenvH7zsKj1k",
  authDomain: "addictionmeter.firebaseapp.com",
  projectId: "addictionmeter",
  storageBucket: "addictionmeter.appspot.com",
  messagingSenderId: "651513531402",
  appId: "1:651513531402:web:cddb39b2b1f25f5bdda3f3",
  measurementId: "G-45XMZPV0ZS",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
