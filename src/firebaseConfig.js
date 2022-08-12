import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChBqAkiexye1-wuqJaQVmyR_SrfClXj5U",
  authDomain: "fir-course-41a40.firebaseapp.com",
  projectId: "fir-course-41a40",
  storageBucket: "fir-course-41a40.appspot.com",
  messagingSenderId: "71169076796",
  appId: "1:71169076796:web:1864378cf08de522d09d39",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
