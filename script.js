import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2QEXAt6__4_gHJePOXMWuyVTB-GHhA_o",
  authDomain: "login-cdc74.firebaseapp.com",
  projectId: "login-cdc74",
  storageBucket: "login-cdc74.firebasestorage.app",
  messagingSenderId: "689889087889",
  appId: "1:689889087889:web:972ff8796c3ab52abeca30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("g-btn");

googleLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Corrected method name: credentialFromResult
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      
      console.log("Logged in user:", user);

      // Redirect after successful login
      window.location.href = "../main.html";
    })
    .catch((error) => {
      console.error("Login failed:", error.code, error.message);
      alert("Sign-in failed. Please try again.");
    });
});