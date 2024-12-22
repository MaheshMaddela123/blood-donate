import React, { useState } from "react";
import "./Contact.css"; // Import your custom styles

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !phone || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:maddelamaheshbabu1234@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
      email
    )}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AMessage: ${encodeURIComponent(
      message
    )}`;

    // Redirect to mail client
    window.location.href = mailtoLink;

    // Clear the form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setStatus("Your message has been sent successfully!");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p><strong>Email:</strong> maddelamaheshbabu1234@gmail.com</p>
          <p><strong>Phone:</strong> +91 9110305805</p>
          <p><strong>Address:</strong> YSR Kadapa, Andhra Pradesh, India</p>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
