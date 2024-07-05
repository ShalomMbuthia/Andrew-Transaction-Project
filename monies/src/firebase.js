// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2VMdQTU4L6Fi8kIa0SSD2Q1JOQ3RWVo0",
  authDomain: "monies-edd9b.firebaseapp.com",
  projectId: "monies-edd9b",
  storageBucket: "monies-edd9b.appspot.com",
  messagingSenderId: "1079844097661",
  appId: "1:1079844097661:web:ef67fd7c7ef69836ce2b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);