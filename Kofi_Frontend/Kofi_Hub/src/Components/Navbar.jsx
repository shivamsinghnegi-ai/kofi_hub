import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../assets/header-user_small.png";
import Logo from "../assets/Screenshot 2025-02-03 154150.png";

const Navbar = () => {
  const navigate = useNavigate();

  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 30px",
    backgroundColor: "#fff",
    borderBottom: "3px solid black",
  };

  const logoStyle = {
    height: "77px",
    width: "100px",
    marginTop: "-18px",
    marginLeft: "20px",
    cursor: "pointer",
  };

  const navListStyle = {
    listStyle: "none",
    display: "flex",
    gap: "40px",
    margin: 0,
    padding: 0,
    fontSize: "18px",
    fontFamily: "Patua One",
    flex: 1,
    justifyContent: "center",
    marginLeft: "620px",
  };

  const navItemStyle = {
    cursor: "pointer",
    color: "#000",
  };

  return (
    <header>
      <div style={navbarStyle}>
        <img 
          src={Logo} 
          alt="Logo" 
          style={logoStyle} 
          onClick={() => navigate("/")} 
        />

        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>ROASTED COFFEE</li>
            <li style={navItemStyle} onClick={() => navigate("/offers")}>Offers</li>
            <li style={navItemStyle} onClick={() => navigate("/equipment")}>Equipment</li>
            <li style={navItemStyle} onClick={() => navigate("/AboutUs")}>About Us</li>
            <li style={navItemStyle} onClick={() => navigate("/Contact")}>Contact Us</li>
          </ul>
        </nav>

        {/* User Icon */}
        <img 
          src={user} 
          alt="" 
          style={{ width: "30px", height: "32px", marginTop: "-5px", cursor: "pointer" }} 
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
};

export default Navbar;
