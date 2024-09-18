// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxCfKKB_RzjR_-X9PoDR_omM1m1q-lhs",
  authDomain: "fir-auth-40ace.firebaseapp.com",
  projectId: "fir-auth-40ace",
  storageBucket: "fir-auth-40ace.appspot.com",
  messagingSenderId: "293424048050",
  appId: "1:293424048050:web:5ab583bd7f4969e9c726ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;


export{auth,provider};