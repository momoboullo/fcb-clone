import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-6-G-F5c5yhYL_kNDK5SNN1bgmq_BfB0",
  authDomain: "facebook-yt-33bfe.firebaseapp.com",
  projectId: "facebook-yt-33bfe",
  storageBucket: "facebook-yt-33bfe.appspot.com",
  messagingSenderId: "627533535343",
  appId: "1:627533535343:web:b18af4a3bbe54014e1959a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
