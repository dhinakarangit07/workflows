// src/components/AllCases/AllCases.jsx
import React from 'react';
import './AllCases.css'; // Optional for styling

const AllCases = () => {
  // Sample data (would normally come from props or API)
  const cases = [
    {
      cnrNo: 'TNCH15000332017',
      refNo: '2446/2017',
      caseNo: '2446/2017',
      year: '2017',
      prevDate: '28-05-2025',
      nextDate: '19-07-2025',
      courtNo: '2-XX Metropolitan Magistral Course, Ribbon Building, Chennai',
      court: 'MetropolMagistral Course, Ribbon Building, Chennai',
      firstParty: '1JM.E. Jacob',
      oppositeParty: '1J D. Giriraj',
      fixedFor: 'Service Penning_No Ballable Warrant',
      type: 'CC-Calendar Case',
      psCo: '---',
      us: '---',
      comments: 'NEGOTIABLE INSTRUMENTS ACT, 1881, 138 Mt',
      actions: '✅Save More'
    }
  ];

  return (
    <div className="all-cases-container">
      <div className="header-section">
        <h2>All Cases ({cases.length})</h2>
        
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

      <div className="cases-table-container">
        <table className="cases-table">
          <thead>
            <tr>
              <th>CNR No.</th>
              <th>Ref. No.</th>
              <th>Case No</th>
              <th>Year</th>
              <th>Prev. Date</th>
              <th>Next Date</th>
              <th>Court No.</th>
              <th>Court ☆</th>
              <th>First Party</th>
              <th>Opposite Party</th>
              <th>Fixed For</th>
              <th>Type</th>
              <th>P.S/Co.</th>
              <th>U.S ☆</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.length > 0 ? (
              cases.map((caseItem, index) => (
                <tr key={index}>
                  <td>{caseItem.cnrNo}</td>
                  <td>{caseItem.refNo}</td>
                  <td>{caseItem.caseNo}</td>
                  <td>{caseItem.year}</td>
                  <td>{caseItem.prevDate}</td>
                  <td>{caseItem.nextDate}</td>
                  <td>{caseItem.courtNo}</td>
                  <td>{caseItem.court}</td>
                  <td>{caseItem.firstParty}</td>
                  <td>{caseItem.oppositeParty}</td>
                  <td>{caseItem.fixedFor}</td>
                  <td>{caseItem.type}</td>
                  <td>{caseItem.psCo}</td>
                  <td>{caseItem.us}</td>
                  <td>{caseItem.comments}</td>
                  <td>{caseItem.actions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="16">No Cases Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCases;