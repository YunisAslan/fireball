import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBAEn0Hi_KckCg-3HgxNR6mlqa2ZG66hvQ",
    authDomain: "fireball-ced3b.firebaseapp.com",
    projectId: "fireball-ced3b",
    storageBucket: "fireball-ced3b.appspot.com",
    messagingSenderId: "414313401747",
    appId: "1:414313401747:web:6bcc27d47d415580a7ec66",
    measurementId: "G-TP4K5969ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
//images, files...
export const storage = getStorage(app) 