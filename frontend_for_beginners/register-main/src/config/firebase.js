import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADthJVmq1sLDd3gKqcFwd-YKVBQv72m6g",
  authDomain: "cybercamp-fyb.firebaseapp.com",
  databaseURL: "https://cybercamp-fyb-default-rtdb.firebaseio.com",
  projectId: "cybercamp-fyb",
  storageBucket: "cybercamp-fyb.appspot.com",
  messagingSenderId: "654996923165",
  appId: "1:654996923165:web:a21281a586db28f3e837f4",
  measurementId: "G-BE5H1E6S5M"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
