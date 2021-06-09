import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsEtUVmX7TjgpWZ7Uo_brS5ew6Nlaw7g8",
  authDomain: "mission-events.firebaseapp.com",
  projectId: "mission-events",
  storageBucket: "mission-events.appspot.com",
  messagingSenderId: "169259111397",
  appId: "1:169259111397:web:f077f6d48fe4c66b66d50c",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectAuth };
