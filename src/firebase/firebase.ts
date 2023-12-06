import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore} from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCOOocW0geNGb_Jgwsoa3kV6eOH_4ZDVu8",
    authDomain: "grademica-uh.firebaseapp.com",
    projectId: "grademica-uh",
    storageBucket: "grademica-uh.appspot.com",
    messagingSenderId: "206183311152",
    appId: "1:206183311152:web:fd154d74f91df0f0fe4af5",
    measurementId: "G-3XM5ZYQ1SZ"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const app = initializeApp(config);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = firebase.firestore();
const db = getFirestore(app);

export { auth, database, firestore, db };

