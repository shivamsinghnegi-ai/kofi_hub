
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Peacock from "../assets/peacock_1_1366x 1.png";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://kofi-hub-7.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        setFormSuccess(true);
        setFormData({ name: "", email: "", phonenumber: "", message: "" });
      } else {
        setFormSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          maxWidth: "1700px",
          backgroundColor: "#FFF9EF",
          padding: "29px",
          fontFamily: "Patua One",
          fontWeight: "300",
          height: "100vh",

        }}
      >
        <h1
          style={{
            fontFamily: "Patua One",
            marginTop: "-30px",
            marginBottom: "70px",
            borderBottom: "2px solid black",
            marginTop: "30px",
            fontWeight: "300",
            marginLeft: "20px",
          }}
        >
          Contact Form
        </h1>

        {/* Image Positioned Partially Under the Form */}
        <img
          src={Peacock}
          alt="Decorative"
          style={{
            position: "absolute",
            right: "90px", 
            top: "85%",
            transform: "translateY(-50%)",
            width: "880px",
            zIndex: "0",
    
          }}
        />

        {formSuccess === true ? (
          <p style={{ color: "green", textAlign: "center" }}>
             Thank you for contacting us!
          </p>
        ) : formSuccess === false ? (
          <p style={{ color: "red", textAlign: "center" }}>
             Failed to submit. Please try again.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ position: "relative", zIndex: "1" }}>
            <div style={{ marginBottom: "16px", marginLeft: "20px" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "55%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "2px solid black",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px", marginLeft: "20px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "55%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "2px solid black",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px", marginLeft: "20px" }}>
              <label htmlFor="phonenumber" style={{ display: "block", marginBottom: "5px" }}>
                Phone Number:
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                style={{
                  width: "55%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "2px solid black",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px", marginLeft: "20px" }}>
              <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "55%",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "2px solid black",
                  fontSize: "14px",
                  height: "120px",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "white",
                color: "Black",
                padding: "6px",
                fontWeight: "bold",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                border: "2px solid black",
                width: "8%",
                marginLeft: "20px",
              }}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          

        )}
        <Footer />
      </div>
    </div>
  );
};


export default ContactUs;
