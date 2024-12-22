import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Donate.css";

const Donate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    village: "",
    mandal: "",
    state: "",
    district: "",
    bloodGroup: "",
    age: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure `age` is a number
    const age = Number(formData.age); 
  
    // Validate age
    if (!Number.isInteger(age) || age <= 18 || age > 66) {
      alert("You are not eligible to fill the form. Please check your age.");
      return; // Prevent form submission
    }
  
    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please check your phone number. It should be exactly 10 digits.");
      return; // Prevent form submission
    }
  
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please check your email format. Example: example@domain.com");
      return; // Prevent form submission
    }
  
    try {
      const response = await fetch("http://localhost:5000/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
  
      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          village: "",
          mandal: "",
          state: "",
          district: "",
          bloodGroup: "",
          age: "",
        });
      } else {
        setStatus(result.error || "Failed to submit form.");
      }
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };
  
  
  return (
    <div className="donate-container">
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit} className="donate-form">
        <div className="form-row">
          <div className="form-group left">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group right">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className="form-group right">
            <label>Blood Group:</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <div className="form-row">
  <div className="form-group left">
    <label>Age:</label>
    <input
      type="number"
      name="age"
      value={formData.age}
      onChange={handleChange}
      min="18"
      max="66"
      required
    />
  </div>
</div>


        <div className="address-section">
          <h3>Address</h3>
          <div className="form-row">
            <div className="form-group left">
              <label>Village/City:</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group right">
              <label>Mandal:</label>
              <input
                type="text"
                name="mandal"
                value={formData.mandal}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group left">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group right">
              <label>District:</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="button"
            className="go-back-btn"
            onClick={() => navigate("/eligibility-check")}
          >
            Go Back
          </button>
        </div>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Donate;
