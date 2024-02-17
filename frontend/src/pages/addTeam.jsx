import React, { useState } from 'react';

const AddTeams = () => {
  const [teamName, setTeamName] = useState('');
  const [teamDesc, setTeamDesc] = useState('');
  const [sportID, setSportID] = useState('');
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');

  const addNewTeam = () => {
    console.log("Submitting new team data:", { teamName, teamDesc, sportID, gender, year });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={addNewTeam} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '5px', marginTop:'40px' }}>Team Name:</label>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} style={{ width: '300px', height: '30px' }} />
        <br />
        <label style={{ marginBottom: '5px' }}>Team Description:</label>
        <input type="text" value={teamDesc} onChange={(e) => setTeamDesc(e.target.value)} style={{ width: '300px', height: '30px' }} />
        <br />
        <label style={{ marginBottom: '5px' }}>Sport ID:</label>
        <input type="text" value={sportID} onChange={(e) => setSportID(e.target.value)} style={{ width: '300px', height: '30px' }} />
        <br />
        <label style={{ marginBottom: '5px' }}>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: '300px', height: '30px' }} />
        <br />
        <label style={{ marginBottom: '5px' }}>Year:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} style={{ width: '300px', height: '30px' }} />
        <br />
        <button type="submit" style={{ width: '310px', height: '40px', marginTop: '20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default AddTeams;