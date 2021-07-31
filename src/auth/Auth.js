import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBC4O8H38MXUYlXyTLqJLpo4Z1aHbK_H2E",
  authDomain: "mnk2254.firebaseapp.com",
  projectId: "mnk2254",
  storageBucket: "mnk2254.appspot.com",
  messagingSenderId: "243517217494",
  appId: "1:243517217494:web:431e1dfcd23fed4d3f0777"
};
  // Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
export default fire;