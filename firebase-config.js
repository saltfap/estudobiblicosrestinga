import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBV5iW3FOYf9tA2BzwP322Otw90JMHgXKE",
  authDomain: "estudosbiblicosrestinga.firebaseapp.com",
  projectId: "estudosbiblicosrestinga",
  storageBucket: "estudosbiblicosrestinga.firebasestorage.app",
  messagingSenderId: "835895048163",
  appId: "1:835895048163:web:666e693ef32fdd9dd052d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };