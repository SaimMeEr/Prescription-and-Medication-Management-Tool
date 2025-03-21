import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, remove, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnCxHSK_g5LxBO8DOVAH7F0FF-_bKkzAs",
  authDomain: "med-management-app.firebaseapp.com",
  databaseURL: "https://med-management-app-default-rtdb.firebaseio.com",
  projectId: "med-management-app",
  storageBucket: "med-management-app.appspot.com",
  messagingSenderId: "8956717136",
  appId: "1:8956717136:web:ef1a2d14f73fc71ef54955",
  measurementId: "G-6KLSJXLQ45",
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, get, remove, update };
