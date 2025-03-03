import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import peacock from "../../assets/peacock.png";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKdlaPFJiTTQxlRZeSRl75ORB5DIOmfwQ",
  authDomain: "kofi-hub-authentication.firebaseapp.com",
  projectId: "kofi-hub-authentication",
  storageBucket: "kofi-hub-authentication.firebasestorage.app",
  messagingSenderId: "386660351699",
  appId: "1:386660351699:web:6b436d670aaa466ac71e26",
  measurementId: "G-QFWY2RVQLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginAccountForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User logged in:", userCredential.user);
      setSuccess("Login successful! Redirecting...");

      // Redirect to the dashboard or home page after login
      setTimeout(() => {
        navigate("/"); // Change '/dashboard' to your desired page
      }, 2000);
    } catch (error) {
      console.error("Error:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "serif",
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFF9EF",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "normal",
          marginBottom: "30px",
          fontFamily: "serif",
        }}
      >
        Login
      </h1>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", textAlign: "center" }}>{success}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "43%",
              padding: "12px",
              border: "2px solid black",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box",
              marginLeft: "400px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "43%",
              padding: "12px",
              border: "2px solid black",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box",
              marginLeft: "400px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "43%",
            padding: "12px",
            backgroundColor: "#D3EDF4",
            color: "black",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: "30px",
            marginLeft: "400px",
          }}
        >
          Login
        </button>
      </form>
      
      <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"300",cursor:"pointer"}} onClick={() => navigate("/signup")}>Create Account</h1>

      <img
        src={peacock}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "20",
          left: "0",
        }}
      />
    </div>
  );
}

export default LoginAccountForm;
