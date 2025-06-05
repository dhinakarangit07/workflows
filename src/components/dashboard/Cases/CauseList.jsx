// src/components/CauseList/CauseList.jsx
import React, { useState } from 'react';
import './CauseList.css'; // Optional for styling

const CauseList = () => {
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    court: '',
    date: '',
    establishment: 'Criminal'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will be implemented later when connecting to data
    console.log('Form submitted:', formData);
  };

  return (
    <div className="cause-list-container">
      <h2>Get District Court Cause List</h2>
      
      <form onSubmit={handleSubmit} className="cause-list-form">
        <div className="form-row">
          <div className="form-group">
            <label>Select State</label>
            <select 
              name="state" 
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">-- Select State --</option>
              {/* States will be populated dynamically */}
            </select>
          </div>

          <div className="form-group">
            <label>Select Court</label>
            <select 
              name="court" 
              value={formData.court}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Court --</option>
              {/* Courts will be populated dynamically */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select District</label>
            <select 
              name="district" 
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">-- Select District --</option>
              {/* Districts will be populated dynamically */}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select Court Establishment</label>
            <select 
              name="establishment" 
              value={formData.establishment}
              onChange={handleChange}
              required
            >
              <option value="Criminal">Criminal</option>
              <option value="Civil">Civil</option>
              <option value="Family">Family</option>
              {/* Add more establishment types as needed */}
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Get Cause List</button>
        </div>
      </form>
    </div>
  );
};

export default CauseList;