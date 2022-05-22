// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4e6AExk0fTlDXcwNTWdnXRUtxDzYIzpY",
    authDomain: "rotary-project-b8d3b.firebaseapp.com",
    projectId: "rotary-project-b8d3b",
    storageBucket: "rotary-project-b8d3b.appspot.com",
    messagingSenderId: "509625224955",
    appId: "1:509625224955:web:db35587de0cf0c19afea5e",
    measurementId: "G-3CLPVREKHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;