// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2F4_Jg9Vn7Xnk6-bHV5c4oDtkTtnD7yM",
  authDomain: "bike-store---react.firebaseapp.com",
  projectId: "bike-store---react",
  storageBucket: "bike-store---react.appspot.com",
  messagingSenderId: "262494126574",
  appId: "1:262494126574:web:eb3cd5e7ecbaa457e54eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore initialize
const db = getFirestore(app)

export default db