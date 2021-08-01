
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBC4O8H38MXUYlXyTLqJLpo4Z1aHbK_H2E",
    authDomain: "mnk2254.firebaseapp.com",
    databaseURL: "https://mnk2254-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mnk2254",
    storageBucket: "mnk2254.appspot.com",
    messagingSenderId: "243517217494",
    appId: "1:243517217494:web:431e1dfcd23fed4d3f0777"
})

export const auth = app.auth()
export default app