import React from "react";
import logo from "./logo.png"
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="logo-text">
          <h2>DSH</h2>
          <p>Institute & Software Solutions</p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#courses">COURSES</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#testimonial">TESTIMONIAL</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>

      {/* Right Side Button */}
      <div className="login-btn">
        <button>STUDENT LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
