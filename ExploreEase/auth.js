// Initialize Firebase
// Your Firebase configuration (replace with your real config from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function
function signUp() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Sign up successful!");
      window.location.href = "home.html"; // Redirect after signup
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}

// Login function
function signIn() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "home.html"; // Redirect after login
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}
