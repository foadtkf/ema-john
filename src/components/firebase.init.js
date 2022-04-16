// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6HpQcWEncGEpXHS86rsEpvgkfJ2H9YFY",
  authDomain: "ema-john-simple-570a1.firebaseapp.com",
  projectId: "ema-john-simple-570a1",
  storageBucket: "ema-john-simple-570a1.appspot.com",
  messagingSenderId: "996620773514",
  appId: "1:996620773514:web:d00b3027a099b1cdcfa573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth