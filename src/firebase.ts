// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';
import { useInRouterContext } from "react-router-dom";
import firebase from 'firebase/app';
import { json } from "stream/consumers";
import { string } from "prop-types";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFc_eE74AOomZdxs4dGah_mV7h4P2fMcQ",
  authDomain: "talkthru-10fb4.firebaseapp.com",
  projectId: "talkthru-10fb4",
  storageBucket: "talkthru-10fb4.appspot.com",
  messagingSenderId: "669444900844",
  appId: "1:669444900844:web:07faea8c9d10240bcea2c9",
  measurementId: "G-QK3CTB50VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and DB services
const auth = getAuth(app);
const db = getFirestore(app);

// Create PlanetScale User Function
const createPScaleUser = async (name: string, email: string) => {
    const user = auth.currentUser;
    const token = await user?.getIdToken();

    const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })

    if (!response.ok) {
        throw new Error('Error creating user');
    }

    return response.json;

}

// Google Auth SignIn Function
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        const email = user.email;
        const name = user.displayName;
        if(docs.docs.length === 0) {
            await createPScaleUser(`${user.displayName}`, `${user.email}`);
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
    }
};

// Email & Password SignIn Function
const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        console.log("button pressed");
        console.log(email, password);
        await signInWithEmailAndPassword(auth, email, password);
        console.log("logged in");
    } catch (err) {
        console.error(err);
    }
};

// Register with Email & Password Function
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await createPScaleUser(name, email);
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
    }
};

// Function to send a reset password link to an email
const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
    }
};

// Logout Function
const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };