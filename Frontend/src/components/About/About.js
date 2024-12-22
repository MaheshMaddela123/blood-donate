import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2>About</h2>
      <p>
        Blood donation is a selfless act that can save lives. Every two seconds, someone in need receives a blood transfusion, and a single donation can help up to three patients. Blood is essential for surgeries, cancer treatments, chronic illnesses, and traumatic injuries.
      </p>
      <p>
        While blood cannot be manufactured, it can only come from generous donors like you. Your small contribution can make a significant difference in emergencies, ensuring hospitals and medical centers always have the supply they need to save lives.
      </p>

      <div className="cards-container">
        <div className="card">
          <h3>Why Donate Blood?</h3>
          <ul>
            <li><strong>Save Lives:</strong> Your blood donation can save lives in emergencies or for patients with critical illnesses.</li>
            <li><strong>Health Benefits:</strong> Regular donation can improve heart health and reduce iron overload.</li>
            <li><strong>Community Support:</strong> Contribute to the well-being of your community by ensuring a steady blood supply.</li>
          </ul>
          
        </div>

        <div className="card">
          <h3>How the Website Works</h3>
          <p>
            Our platform connects blood donors with medical facilities in need of blood donations. Donors can easily provide information, select their blood group, and receive updates on donation in their area. We aim to make the donation process simple and seamless, ensuring that everyone has access to life-saving blood.
          </p>
        </div>

        <div className="card">
          <h3>Our Work</h3>
          <p>
            We collaborate with hospitals, clinics, and organizations to organize blood donation. Through our platform, we ensure that blood donations are efficient, and recipients get timely help. Our mission is to maintain a steady and reliable blood supply for medical emergencies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
