// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_SX9KIkP8rvX0iAFXfsD1QPRVapQavs",
  authDomain: "coffe-stores.firebaseapp.com",
  projectId: "coffe-stores",
  storageBucket: "coffe-stores.appspot.com",
  messagingSenderId: "229869099411",
  appId: "1:229869099411:web:1d7e6a405a61b28654f066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;