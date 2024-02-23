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
    const [grade, setGrade] = useState('FR');
    const [isCoach, setIsCoach] = useState("0");
    const [ jerseyNum, setJerseyNum] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3000/players', { playerName, teamID, age, grade, isCoach,jerseyNum});
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
                <label>
                    grade:
                    <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
                        <option value="FR">Freshman (FR)</option>
                        <option value="SO">Sophomore (SO)</option>
                        <option value="JR">Junior (JR)</option>
                        <option value="SR">Senior (SR)</option>
                    </select>
                </label>
                <label>
                    Coach:
                    <select value={isCoach} onChange={(e) => setIsCoach(e.target.value === 'true')} required>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </label>
                <label>
                    Jersey Number:
                    <input type="number" value={jerseyNum} onChange={(e) => setJerseyNum(e.target.value)} required/>
                </label>
                <button type="submit">Add Player</button>
            </form>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default AddPlayer;
