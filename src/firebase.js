import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";
const app = firebase.initializeApp({
    apiKey: "AIzaSyBAPO_G4sz07KNeEOZGzf0MVTOXleIFh2U",
    authDomain: "ffbd-6105f.firebaseapp.com",
    databaseURL: "https://ffbd-6105f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ffbd-6105f",
    storageBucket: "ffbd-6105f.appspot.com",
    messagingSenderId: "556651740165",
    appId: "1:556651740165:web:1edc6d34f39f473120b06c",
    measurementId: "G-FYJ9QVSMH2"
})
export const auth = app.auth()
export default app