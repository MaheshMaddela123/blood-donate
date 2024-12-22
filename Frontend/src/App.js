import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Contact from "./components/Contact/Contact";
import DonorList from "./components/Donor/DonorList";
import EligibilityCheck from "./components/EligibilityCheck/EligibilityCheck";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* About Page */}
          <Route path="/about" element={<About />} />
          
          {/* Blood Donation Flow */}
          <Route path="/eligibility-check" element={<EligibilityCheck />} />
          <Route path="/donate" element={<Donate />} />
          
          {/* Contact and Donor List */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/donor-list" element={<DonorList />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
