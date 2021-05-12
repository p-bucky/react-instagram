import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here i want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDzkZ526oDy7qZeIASXPj3ryLl7hsaptYA",
  authDomain: "instagram-ebef1.firebaseapp.com",
  projectId: "instagram-ebef1",
  storageBucket: "instagram-ebef1.appspot.com",
  messagingSenderId: "41170589994",
  appId: "1:41170589994:web:4d5fc80df9cb1b12462653",
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file only once
// seedDatabase(firebase);

export { firebase, FieldValue };
