import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import './addPlayer.css';

const AddPlayer = ({ onAddPlayer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const passedTeamId = location.state?.teamId;

    const handleBackClick = () => {
        navigate('/players', {state: {teamId: teamID, teamName: location.state?.teamName}});
    };

    const [teams, setTeams] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [age, setAge] = useState('');
    const [teamID, setTeamID] = useState(passedTeamId || '');
    const [grade, setGrade] = useState('');
    const [isCoach, setIsCoach] = useState("0");
    const [jerseyNum, setJerseyNum] = useState('');

    useEffect(() => {
        const fetchTeams = async() => {
            try { 
                const response = await axios.get('http://localhost:3000/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('There was an error fetching the teams:', error);
            }
        };

        fetchTeams();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/players', { playerName, teamID: Number(teamID), age, grade, isCoach: Number(isCoach), jerseyNum });
            navigate('/players', {state: { teamId: teamID, teamName: location.state?.teamName}});
        } catch (error) {
            console.error('There was an error adding the player:', error);
        }
    };

    return (
        <div className="container">
            <button onClick={handleBackClick} className={`backButton ${isHovering ? 'hover' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Back</button>
            <form onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <label>Player Name:</label>
                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required className="input"/>
                </div>
                <div className="formGroup">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required className="input"/>
                </div>
                <div className="formGroup">
                    <label>Grade:</label>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)} required className="input">
                        <option value="" disabled>Select a grade</option>
                        <option value="FR">Freshman (FR)</option>
                        <option value="SO">Sophomore (SO)</option>
                        <option value="JR">Junior (JR)</option>
                        <option value="SR">Senior (SR)</option>
                    </select>
                </div>
                <div className='formGroup'>
                    <label>Coach:</label>
                    <select value={isCoach} onChange={(e) => setIsCoach(e.target.value)} className="input">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label>Jersey Number:</label>
                    <input type="number" value={jerseyNum} onChange={(e) => setJerseyNum(e.target.value)} required className="input"/>
                </div>
                <button type="submit" className="submitButton">Add Player</button>
            </form>
        </div>
    );
};

export default AddPlayer;