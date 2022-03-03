// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSB403aNCofAdarWfs3SDNenvH7zsKj1k",
  authDomain: "addictionmeter.firebaseapp.com",
  projectId: "addictionmeter",
  storageBucket: "addictionmeter.appspot.com",
  messagingSenderId: "651513531402",
  appId: "1:651513531402:web:cddb39b2b1f25f5bdda3f3",
  measurementId: "G-45XMZPV0ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
