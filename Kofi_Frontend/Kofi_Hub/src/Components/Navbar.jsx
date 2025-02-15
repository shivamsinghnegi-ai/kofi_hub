import React from "react";
import user from '../assets/header-user_small.png';
import Logo from '../assets/Screenshot 2025-02-03 154150.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 30px",
    backgroundColor: "#fff",
    borderBottom: "3px solid black ",
  };

  const logoStyle = {
    height: "77px",
    width: "100px",
    marginTop: "-18px",
    marginLeft: "20px",
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
    display: "flex",
    marginLeft: "620px",
  };

  const navItemStyle = {
    cursor: "pointer",
    color: "#000",

  };

  const userStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <header>
      <div style={navbarStyle}>
        {/* Logo */}
        <div>
          <img src={Logo} alt="Blue Tokai Coffee Roasters Logo" style={logoStyle} />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>ROASTED COFFEE</li>
            <li style={navItemStyle}>Offers</li>
            <li style={navItemStyle}>Equipment</li>
            <Link to="/AboutUs" style={{ textDecoration: "none" }}><li style={navItemStyle}>About Us</li></Link>
            <Link to="/Contact" style={{ textDecoration: "none" }}><li style={navItemStyle}>Contact Us</li></Link>
          </ul>
        </nav>

        {/* User Icon */}
        <Link to="/">
          <div style={userStyle}>
            <img src={user} alt="User" style={{ width: "30px", height: "32px", marginTop: "-5px", cursor: "pointer" }} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
