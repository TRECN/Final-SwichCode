// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-ER6SPDBMN0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };

const provider1 = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();
const provider3 = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider1)
    .then((result) => {
      const name1 = result.user.displayName;
      const email1 = result.user.email;
      const profilePic1 = result.user.photoURL;

      localStorage.setItem("name", name1);
      localStorage.setItem("email", email1);
      localStorage.setItem("profilePic", profilePic1);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithFacebook = () => {
  signInWithPopup(auth, provider2).then((result) => {
    const name2 = result.user.displayName;
    const email2 = result.user.email;
    const profilePic2 = result.user.photoURL;

    localStorage.setItem("name", name2);
    localStorage.setItem("email", email2);
    localStorage.setItem("profilePic", profilePic2);
  });

  try {
  } catch (error) {
    console.log(error);
  }
};

const signInWithGithub = () => {
  signInWithPopup(auth, provider3).then((result) => {
    const name3 = result.user.displayName;
    const email3 = result.user.email;
    const profilePic3 = result.user.photoURL;

    localStorage.setItem("name", name3);
    localStorage.setItem("email", email3);
    localStorage.setItem("profilePic", profilePic3);
  });

  try {
  } catch (error) {
    console.log(error);
  }
};

export { signInWithFacebook, signInWithGithub };
