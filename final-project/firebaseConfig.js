import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 



const firebaseConfig = {
  apiKey: "AIzaSyDvaUM3SXM1PL8M-V2__CzM9kPcAeT1akc",
  authDomain: "fir-firebase-338d9.firebaseapp.com",
  projectId: "fir-firebase-338d9",
  storageBucket: "fir-firebase-338d9.appspot.com",
  messagingSenderId: "1028831186366",
  appId: "1:1028831186366:web:472e6d9b4e2bd7f50dbdef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};
