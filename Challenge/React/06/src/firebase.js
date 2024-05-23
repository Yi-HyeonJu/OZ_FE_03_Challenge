// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-EH1eczMeChiiDRHFN21iyUXjE5qCack",
    authDomain: "reactappletv.firebaseapp.com",
    projectId: "reactappletv",
    storageBucket: "reactappletv.appspot.com",
    messagingSenderId: "1036738677012",
    appId: "1:1036738677012:web:8c30f14ee8ad6400e49a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;