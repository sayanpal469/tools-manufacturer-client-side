// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ0jbHkMymcQ8Ps8aDgAQmEDd1ofNng6c",
  authDomain: "toolsmanufacturer-6b2c7.firebaseapp.com",
  projectId: "toolsmanufacturer-6b2c7",
  storageBucket: "toolsmanufacturer-6b2c7.appspot.com",
  messagingSenderId: "535242067936",
  appId: "1:535242067936:web:d00026ba18aabdd9e76585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;