// import firebase from "firebase"
// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth"
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCup9zz6uCZ-fl1jQvlJzzYaW_OZJ1VA4M",
    authDomain: "clone-fee46.firebaseapp.com",
    projectId: "clone-fee46",
    storageBucket: "clone-fee46.appspot.com",
    messagingSenderId: "124271304463",
    appId: "1:124271304463:web:ff78ec281bbf0155c1e87a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore()

const auth = firebase.auth();


export { db,auth }