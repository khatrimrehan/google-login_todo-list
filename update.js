// update.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Make sure this config MATCHES your script.js config exactly!
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

function updateUserProfile(user) {
  const userName = user.displayName || "User";
  const userProfilePicture = user.photoURL || "";

  const nameElem = document.getElementById("userName");
  const imgElem = document.getElementById("userProfilePicture");

  if (nameElem) nameElem.textContent = userName;
  if (imgElem && userProfilePicture) imgElem.src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in user:", user);
    updateUserProfile(user);
  } else {
    console.log("No user session found.");
    alert("Please log in first.");
    window.location.href = "./index.html";
  }
});