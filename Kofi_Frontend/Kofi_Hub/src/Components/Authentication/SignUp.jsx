import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import peacock from "../../assets/peacock.png";


const firebaseConfig = {
  apiKey: "AIzaSyAKdlaPFJiTTQxlRZeSRl75ORB5DIOmfwQ",
  authDomain: "kofi-hub-authentication.firebaseapp.com",
  projectId: "kofi-hub-authentication",
  storageBucket: "kofi-hub-authentication.firebasestorage.app",
  messagingSenderId: "386660351699",
  appId: "1:386660351699:web:6b436d670aaa466ac71e26",
  measurementId: "G-QFWY2RVQLW",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function CreateAccountForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const newUser = userCredential.user;

      await sendEmailVerification(newUser);

      setUser(newUser); 
      setSuccess("Verification email sent! Please check your inbox.");
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      const interval = setInterval(async () => {
        await user.reload(); 
        if (user.emailVerified) {
          setIsVerified(true);
          clearInterval(interval);
          navigate("/"); 
        }
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [user, navigate]);

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", padding: "20px", fontFamily: "serif", position: "relative", minHeight: "100vh", backgroundColor: "#FFF9EF" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "normal", marginBottom: "30px", fontFamily: "serif" }}>Create Account</h1>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", textAlign: "center" }}>
          {success} <br />
          <strong>Once verified, <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/")}>click here</span> to enter.</strong>
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required
            style={{ width: "43%", padding: "12px", border: "2px solid black", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", marginLeft: "400px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required
            style={{ width: "43%", padding: "12px", border: "2px solid black", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", marginLeft: "400px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
            style={{ width: "43%", padding: "12px", border: "2px solid black", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", marginLeft: "400px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required
            style={{ width: "43%", padding: "12px", border: "2px solid black", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", marginLeft: "400px" }} />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required
            style={{ width: "43%", padding: "12px", border: "2px solid black", borderRadius: "4px", fontSize: "16px", boxSizing: "border-box", marginLeft: "400px" }} />
        </div>

        <button type="submit"
          style={{ width: "43%", padding: "12px", backgroundColor: "#D3EDF4", color: "black", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer", textTransform: "uppercase", fontWeight: "bold", marginBottom: "30px", marginLeft: "400px" }}>
          Create
        </button>
      </form>

      <img src={peacock} alt="" style={{ width: "100%", height: "auto", position: "absolute", bottom: "5", left: "0" }} />
    </div>
  );
}

export default CreateAccountForm;
