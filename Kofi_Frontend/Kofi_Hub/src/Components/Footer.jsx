
import React from "react";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import Logo from "../assets/Screenshot 2025-02-03 154150.png";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#D4EDF7",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 80px",
      fontFamily: "Patua One",
      width: "90.8%",
      marginLeft: "-29px",
      position: "absolute",
      zIndex: "1",
      marginTop: "110px",
      overflowX: "hidden",
  
    }}>
      {/* Logo Section */}
      <div>
        <img src={Logo} alt="Kofi Hub Logo" style={{ width: "100px", borderRadius: "10px" }} />
      </div>

      {/* Text Section */}
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "5px" }}>KOFI HUB COFFEE ROASTERS</p>
        <p>
          <span style={{  cursor: "pointer" }}>PRIVACY POLICY</span> – COPYRIGHT © 2024
        </p>
      </div>

      {/* Social Media Section */}
      <div style={{ textAlign: "right",marginTop: "-20px" }}>
        <p>FOLLOW US</p>
        <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
