// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKdlaPFJiTTQxlRZeSRl75ORB5DIOmfwQ",
  authDomain: "kofi-hub-authentication.firebaseapp.com",
  projectId: "kofi-hub-authentication",
  storageBucket: "kofi-hub-authentication.appspot.com", // Fixed
  messagingSenderId: "386660351699",
  appId: "1:386660351699:web:6b436d670aaa466ac71e26",
  measurementId: "G-QFWY2RVQLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize authentication

export { auth }; // Export auth for use in other files
