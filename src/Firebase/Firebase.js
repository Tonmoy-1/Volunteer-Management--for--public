// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsEagaWP0HaFrKWpKzzTpgdpH8zfWdCQY",
  authDomain: "volunteer-connect-793ad.firebaseapp.com",
  projectId: "volunteer-connect-793ad",
  storageBucket: "volunteer-connect-793ad.firebasestorage.app",
  messagingSenderId: "485821130070",
  appId: "1:485821130070:web:4173212aec57caee3062f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
