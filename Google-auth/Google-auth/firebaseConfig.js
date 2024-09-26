// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACoT9IWFs1_2lC3IXstvB0Gs6qq2U99og",
  authDomain: "auth-13bdd.firebaseapp.com",
  projectId: "auth-13bdd",
  storageBucket: "auth-13bdd.appspot.com",
  messagingSenderId: "844950630307",
  appId: "1:844950630307:web:778c55c0c497f27b0f7416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export {auth,provider};