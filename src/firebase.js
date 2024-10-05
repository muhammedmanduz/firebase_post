// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYJLQO_qaMYX_j6thxCl0GNRJNk_KrDTI",
  authDomain: "posts-app-2edf0.firebaseapp.com",
  projectId: "posts-app-2edf0",
  storageBucket: "posts-app-2edf0.appspot.com",
  messagingSenderId: "718337970123",
  appId: "1:718337970123:web:a95dce28570f3a29f0f04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth hzimetlerine erişebilmek için kurulum
export const auth = getAuth(app);

export const db=getFirestore(app);