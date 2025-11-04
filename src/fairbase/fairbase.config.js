// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOCmupAS8YGi1kbnnUGj9GhCe_nA0ZgEg",
    authDomain: "skill-bloom-a04eb.firebaseapp.com",
    projectId: "skill-bloom-a04eb",
    storageBucket: "skill-bloom-a04eb.firebasestorage.app",
    messagingSenderId: "1006926407581",
    appId: "1:1006926407581:web:31d40c81049cb59da77174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
