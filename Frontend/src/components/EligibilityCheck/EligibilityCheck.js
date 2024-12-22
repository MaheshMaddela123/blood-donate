import React from "react";
import { Link } from "react-router-dom";
import "./EligibilityCheck.css";

const EligibilityCheck = () => {
  return (
    <div className="eligibility-check">
      <h1>Blood Donation Eligibility Check</h1>
      <div className="eligibility-info">
        <p>
          Before donating blood, please ensure you meet the following eligibility criteria:
        </p>
        <ul>
          <li>You are between 18 and 65 years old.</li>
          <li>You weigh at least 50 kg (110 lbs).</li>
          <li>You are in good health and feeling well on the day of donation.</li>
          <li>You have not donated blood in the last 3 months.</li>
          <li>You are not currently on antibiotics or have any infections.</li>
          <li>You have not undergone surgery or a major medical procedure recently.</li>
          <li>You are not pregnant or breastfeeding.</li>
          <li>You do not have any chronic conditions like heart disease or anemia.</li>
        </ul>
        <p>
          If you meet the above criteria, you can proceed to fill out the donation form.
        </p>
      </div>
      <div className="action-buttons">
        <Link to="/donate">
          <button className="proceed-button">Proceed to Form</button>
        </Link>
        <Link to="/">
          <button className="back-button">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default EligibilityCheck;
