// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSzaw2R5J15G0IWQBrr2bzzJwB3uebZmA",
  authDomain: "reserva-app-react-restauant.firebaseapp.com",
  projectId: "reserva-app-react-restauant",
  storageBucket: "reserva-app-react-restauant.appspot.com",
  messagingSenderId: "772833943683",
  appId: "1:772833943683:web:0a587bba41aa0dec3a3bb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

