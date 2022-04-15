// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKvrvtarGTWQx21-YLZGsVTaAV6VAW3BU",
  authDomain: "luxury-hotel-react.firebaseapp.com",
  projectId: "luxury-hotel-react",
  storageBucket: "luxury-hotel-react.appspot.com",
  messagingSenderId: "571018095941",
  appId: "1:571018095941:web:aeea6ddcf6475feb65a22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;