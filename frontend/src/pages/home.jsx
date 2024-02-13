import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Welcome to the UMaine Athletic Inventory Tracker</h1>
      <Link to="/teams">
        <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Teams</button>
      </Link>
      <Link to="/players">
        <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Players</button>
      </Link>
      <Link to="/equip">
        <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Equipment</button>
      </Link>
    </div>
  );
};

export default HomePage;