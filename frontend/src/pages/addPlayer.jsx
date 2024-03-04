import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddPlayer = ({ onAddPlayer }) => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    const [playerName, setPlayerName] = useState('');
    const [age, setAge] = useState('');
    const [sport, setSport] = useState('');
    const [teamID, setTeamID] = useState('');
    const [grade, setGrade] = useState('');
    const [isCoach, setIsCoach] = useState("0");
    const [jerseyNum, setJerseyNum] = useState('');

    // Define styles for input and label grouping
    const formGroupStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        marginBottom: '15px', // Adjust spacing between each form group
        width: '100%', // Ensure it takes the full width available
        maxWidth: '300px', // Maximum width to match input style
    };

    const inputStyle = { 
        width: '100%', // Take the full width of the formGroupStyle
        height: '30px',
        marginTop: '5px', // Add some space between label and input
    };

    const formStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom: '20px',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px', 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(`Submitting player with teamID: ${teamID}`);
            await axios.post('http://localhost:3000/players', { playerName, teamID: Number(teamID), age, grade, isCoach: Number(isCoach), jerseyNum });
            navigate('/players'); // Navigate after successful addition
        } catch (error) {
            console.error('There was an error adding the player:', error);
        }
    }

    return (
        <div style= {containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                {/* Wrap each label-input pair in a div with formGroupStyle */}
                <div style={formGroupStyle}>
                    <label>Player Name:</label>
                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required style={inputStyle}/>
                </div>
                <div style={formGroupStyle}>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required style={inputStyle}/>
                </div>
                <div style={formGroupStyle}>
                    <label>Sport:</label>
                    <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} required style={inputStyle}/>
                </div>
                <div style={formGroupStyle}>
                    <label>Team:</label>
                    <select value={teamID} onChange={(e) => setTeamID(e.target.value)} required style={inputStyle}>
                        <option value="" disabled>Select a team</option>
                        <option value="1">Men's Basketball</option>
                        <option value="2">Women's Field Hockey</option>
                        <option value="3">Men's Football</option>
                        <option value="4">Men's Ice Hockey</option>
                        <option value="5">Women's Soccer</option>
                        <option value="6">Women's Softball</option>
                    </select>
                </div>
                <div style={formGroupStyle}>
                    <label>Grade:</label>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)} required style={inputStyle}>
                        <option value="" disabled>Select a grade</option>
                        <option value="FR">Freshman (FR)</option>
                        <option value="SO">Sophomore (SO)</option>
                        <option value="JR">Junior (JR)</option>
                        <option value="SR">Senior (SR)</option>
                    </select>
                </div>
                <div style={formGroupStyle}>
                    <label>Coach:</label>
                    <select value={isCoach} onChange={(e) => setIsCoach(e.target.value)} required style={inputStyle}>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div style={formGroupStyle}>
                    <label>Jersey Number:</label>
                    <input type="number" value={jerseyNum} onChange={(e) => setJerseyNum(e.target.value)} required style={inputStyle}/>
                </div>
                <button type="submit" style={{ width: '310px', height: '40px', marginTop: '20px' }}>Add Player</button>
            </form>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default AddPlayer;

