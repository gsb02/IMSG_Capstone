import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{margin: '-1px', color: 'black'}}>University of Maine Athletic Inventory Tracker</h1>
      <section id="buttonGroup">
        <div className="cs-container">
          <ul className="cs-card-group">
              <Link to="/teams" className="cs-item">
                  <span className="cs-name">Teams</span>
              </Link>
              <Link to="/players" className="cs-item">
                  <span className="cs-name">Players</span>
              </Link>
              <Link to="/equipment" className="cs-item">
                  <span className="cs-name">Equipment</span>
              </Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;