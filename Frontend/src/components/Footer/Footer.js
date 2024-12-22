import React from "react";
import "./Footer.css"; // Import the new CSS file
import {FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <a href="/terms" className="footer-link">Terms and Conditions</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>

        <div className="social-media">
          <a href="https://www.linkedin.com/in/mahesh-babu-maddela/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/MaheshMaddela123" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Blood Donation Initiative. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
