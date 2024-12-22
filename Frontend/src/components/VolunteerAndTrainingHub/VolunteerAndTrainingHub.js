import React, { useState } from "react";
import "./VolunteerAndTrainingHub.css";

const VolunteerAndTrainingHub = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const trainingModules = [
    { id: 1, title: "Introduction to Blood Donation", duration: "2 hours" },
    { id: 2, title: "Organizing a Blood Donation Drive", duration: "3 hours" },
    { id: 3, title: "Volunteer Management", duration: "1.5 hours" },
    { id: 4, title: "Post-Donation Care", duration: "1 hour" },
  ];

  const startModule = (id) => {
    setSelectedModule(id);
    setCertificateGenerated(false);
  };

  const completeModule = () => {
    setCertificateGenerated(true);
  };

  return (
    <div className="volunteer-hub">
      <h1>Volunteer and Training Hub</h1>
      <p>
        Welcome to the Volunteer and Training Hub! Here, you can learn how to
        become a certified blood donation organizer and help save lives.
      </p>

      <div className="training-modules">
        <h2>Available Training Modules</h2>
        <ul>
          {trainingModules.map((module) => (
            <li key={module.id} className="module-item">
              <h3>{module.title}</h3>
              <p>Duration: {module.duration}</p>
              <button onClick={() => startModule(module.id)}>
                Start Module
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedModule && (
        <div className="module-details">
          <h2>Module: {trainingModules.find((m) => m.id === selectedModule)?.title}</h2>
          <p>
            Complete this module to gain valuable insights and become a certified volunteer.
          </p>
          <button className="complete-btn" onClick={completeModule}>
            Complete Module
          </button>
        </div>
      )}

      {certificateGenerated && (
        <div className="certificate">
          <h2>🎉 Congratulations! 🎉</h2>
          <p>
            You have successfully completed the module. Download your
            certificate below:
          </p>
          <a href="/certificate.pdf" download className="download-link">
            Download Certificate
          </a>
        </div>
      )}

      <div className="resources">
        <h2>Volunteer Resources</h2>
        <ul>
          <li>
            <a href="/guidelines.pdf" download>
              Blood Donation Guidelines
            </a>
          </li>
          <li>
            <a href="/organizer-manual.pdf" download>
              Organizer Manual
            </a>
          </li>
          <li>
            <a href="/volunteer-tips.pdf" download>
              Tips for Volunteers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VolunteerAndTrainingHub;
