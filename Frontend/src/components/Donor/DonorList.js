import React, { useState } from "react";
import "./DonorList.css";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState("");
  const [searchCriteria, setSearchCriteria] = useState({
    state: "",
    district: "",
    bloodGroup: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = async () => {
    const { state, district, bloodGroup } = searchCriteria;
    const queryParams = new URLSearchParams();

    if (state) queryParams.append("state", state);
    if (district) queryParams.append("district", district);
    if (bloodGroup) queryParams.append("bloodGroup", bloodGroup);

    try {
      const response = await fetch(
        `https://blood-donate-backend-hy1d.onrender.com/donors?${queryParams.toString()}`
      );

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response Error:", errorText);
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log("Donors:", data);
      setDonors(data);
    } catch (error) {
      console.error("Error Fetching Donors:", error);
      setError(error.message);
    }
  };

  return (
    <div className="donor-list-container">
      <h2>Donor List</h2>
      {error && <p className="error-message">{error}</p>}

      <div className="search-container">
        <input
          type="text"
          name="state"
          placeholder="Enter State"
          value={searchCriteria.state}
          onChange={handleInputChange}
          className="search-input"
        />
        <input
          type="text"
          name="district"
          placeholder="Enter District"
          value={searchCriteria.district}
          onChange={handleInputChange}
          className="search-input"
        />
        <select
          name="bloodGroup"
          value={searchCriteria.bloodGroup}
          onChange={handleInputChange}
          className="search-select"
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
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {donors.length > 0 ? (
        <div className="donor-cards">
          {donors.map((donor) => (
            <div className="donor-card" key={donor._id}>
              <div className="donor-card-content">
                <h3>{donor.name}</h3>
                <p>
                  <span>Phone:</span> {donor.phone}
                </p>
                <p>
                  <span>Email:</span> {donor.email}
                </p>
                <p>
                  <span>Blood Group:</span> {donor.bloodGroup}
                </p>
                <p>
                  <span>Village:</span> {donor.village}
                </p>
                <p>
                  <span>Mandal:</span> {donor.mandal}
                </p>
                <p>
                  <span>District:</span> {donor.district}
                </p>
                <p>
                  <span>State:</span> {donor.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-donors">No donors found</p>
      )}
    </div>
  );
};

export default DonorList;
