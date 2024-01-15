// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgQHXC11Ez-vWP5iDSSGSju339GJt3Qdg",
  authDomain: "hudhud-1c01f.firebaseapp.com",
  projectId: "hudhud-1c01f",
  storageBucket: "hudhud-1c01f.appspot.com",
  messagingSenderId: "606554435199",
  appId: "1:606554435199:web:3a8d1d696fbdd53513194a",
  measurementId: "G-NS4WM5C77L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
