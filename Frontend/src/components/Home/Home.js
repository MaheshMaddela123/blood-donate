import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";  // Make sure you create the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      {/* Background Section */}
      <div className="welcome-section">
        <h1>Welcome to Blood Donation Portal</h1>
      </div>

      {/* Cards Section */}
      <div className="cards">
        <div className="card">
          <h2>Why Do We Need to Donate?</h2>
          <p>
            Blood donation is critical for saving lives. Every donation can help up to three people in need. It is essential in medical procedures such as surgeries, accident recovery, and cancer treatments. Your donation is a lifeline for many.
          </p>
          <Link to="/about" className="learn-more">Learn More</Link>
        </div>
        
        <div className="card">
          <h2>Our Work</h2>
          <p>
            Our mission is to increase awareness and encourage people to donate blood regularly. We partner with local hospitals and organizations to ensure that blood reaches those in need, especially in emergencies and disasters.
          </p>
          <Link to="/about" className="learn-more">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
