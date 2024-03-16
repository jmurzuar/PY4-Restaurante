// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcpmtMofc7wFyYT4WrKAowy79r304IXlg",
  authDomain: "primerproyecto-89a87.firebaseapp.com",
  projectId: "primerproyecto-89a87",
  storageBucket: "primerproyecto-89a87.appspot.com",
  messagingSenderId: "786244546176",
  appId: "1:786244546176:web:71d3eaceea649cf44c4065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)