// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "reactchatapp-c86e8.firebaseapp.com",
	projectId: "reactchatapp-c86e8",
	storageBucket: "reactchatapp-c86e8.appspot.com",
	messagingSenderId: "547197191913",
	appId: "1:547197191913:web:2ded11b89bf3b524b99278",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

console.log(import.meta.env.VITE_API_KEY);
