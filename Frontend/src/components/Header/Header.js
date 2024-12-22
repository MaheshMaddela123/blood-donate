import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '.././images/blood.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Blood Donation Logo" className="logo" />
        <h1>Blood Donation Portal</h1>
      </div>
      {/* Hamburger button for mobile */}
      <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {/* Navigation links */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/eligibility-check" className="nav-link" onClick={() => setMenuOpen(false)}>Donate Blood</Link>
        <Link to="/donor-list" className="nav-link" onClick={() => setMenuOpen(false)}>Find Donor</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
