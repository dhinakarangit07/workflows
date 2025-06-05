// src/components/ImportantCases/ImportantCases.jsx
import React from 'react';
import './ImportantCases.css'; // Optional for styling

const ImportantCases = () => {
  return (
    <div className="important-cases-container">
      <div className="header-section">
        <h2>Important Cases (0)</h2>
        
        <div className="action-buttons">
          <button>Print</button>
          <button>Notify</button>
          <button>Previous Date</button>
          <button>Next Date</button>
          <button>Search Text</button>
        </div>
      </div>

      <div className="disclaimer-note">
        <p>
          <strong>Note:</strong> Click on ( ) button to get Next Date of any particular case. - Click on ( ) button to get details of a particular case. By using this software, you agree to the terms and conditions.
        </p>
      </div>

      <div className="show-hide-columns">
        <button>Show/Hide Columns</button>
      </div>

      <div className="cases-table-container">
        <table className="cases-table">
          <thead>
            <tr>
              <th></th>
              <th>Ref. No.</th>
              <th>Case No</th>
              <th>Year</th>
              <th>Prev. Date</th>
              <th>Next Date</th>
              <th>Court No.</th>
              <th>Court $</th>
              <th>First Party</th>
              <th>Opposite Party</th>
              <th>Fixed For $</th>
              <th>Type e</th>
              <th>P.S./Co. $</th>
              <th>U.S.$</th>
              <th>Comments $</th>
            </tr>
            <tr>
              <th>CNR No.</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="no-cases-found">
              <td colSpan="15">No Cases Found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantCases;