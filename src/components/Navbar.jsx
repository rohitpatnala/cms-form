// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <nav className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="" className="navbar-link">
            About ASETT
          </Link>
          <Link to="" className="navbar-link">
            Contact Us
          </Link>
          <Link to="" className="navbar-link">
            Support ▼
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
