import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './players.css';

const AddPlayer = ({ onAddPlayer }) => {

    const navigate = useNavigate();
    const handleBackClick = () => {
            navigate(-1);
    }

    const [playerName, setPlayerName] = useState('');
    const [age, setAge] = useState('');
    const [sport, setSport] = useState('');
    const [teamID, setTeamID] = useState('');
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3000/players', { playerName, teamID, age, grade:"SR", isCoach:0,jerseyNum:0 });
        navigate('/players'); // Navigate after successful addition
    } catch (error) {
            console.error('There was an error adding the player:', error);
    }
    }

    return (
        <div>
            <h1>Add a New Player</h1>
            {/* Form for adding a new player */}
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required/>
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
                </label>
                <label>
                    Sport:
                    <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} required/>
                </label>
                <label>
                    teamID:
                    <input type="number" value={teamID} onChange={(e) => setTeamID(e.target.value)} required/>
                </label>
                <button type="submit">Add Player</button>
            </form>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default AddPlayer;
