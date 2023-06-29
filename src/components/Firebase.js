
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkwFZKSbfQRzJdVKLvqaZ_YP2a2zk7C8c",
  authDomain: "clone-5c9e1.firebaseapp.com",
  projectId: "clone-5c9e1",
  storageBucket: "clone-5c9e1.appspot.com",
  messagingSenderId: "306325833831",
  appId: "1:306325833831:web:0e512048441fe876d52cc2",
  measurementId: "G-D84DZF9G8H"
};
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const auth = getAuth(app)

export { db, auth}
