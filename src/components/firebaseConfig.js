// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMvjHBamUufSraxbSJqDm9b9zs4HXuRM4",
  authDomain: "intelli-fridge.firebaseapp.com",
  databaseURL: "https://intelli-fridge-default-rtdb.firebaseio.com",
  projectId: "intelli-fridge",
  storageBucket: "intelli-fridge.appspot.com",
  messagingSenderId: "893540752041",
  appId: "1:893540752041:web:6d4ed4946989cb92d9a7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}

export { database, ref, onValue, signInWithGoogle };
