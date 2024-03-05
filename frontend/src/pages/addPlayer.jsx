import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const AddPlayer = ({ onAddPlayer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const passedTeamId = location.state?.teamId;
    const handleBackClick = () => {
        navigate(-1);
    }
    const [teams, setTeams] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [age, setAge] = useState('');
    const [sport, setSport] = useState('');
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
        width: '300px', // Take the full width of the formGroupStyle
        height: '30px',
        marginTop: '5px', // Add some space between label and input
    };

    const formStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: '60px', 
        marginBottom: '20px',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px', 
        position: 'relative',
        width: '100%'
    };

    const backButtonStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        border: 'none',
        color: isHovering ? '#3498db' : 'inherit',
        cursor: 'pointer',
        padding: '10px',
        transition: 'color o.3s ease',
        textDecoration: 'underline'
    }

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
            <button onClick={handleBackClick} style={backButtonStyle} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Back</button>
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
                {/* <div style={formGroupStyle}>
                    <label>Team:</label>
                    <select value={teamID} onChange={(e) => setTeamID(e.target.value)} required style={inputStyle}>
                        <option value="" disabled>Select a team</option>
                        {teams.map((team) => (
                            <option key={team.teamId} value={team.teamId}>{team.teamName}</option>
                        ))}
                    </select>
                </div> */}
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
                <button type="submit" style={{ backgroundColor: "#3498db", color: "white", width: '100px', height: '40px', marginTop: '20px', borderRadius: '10px' }}>Add Player</button>
            </form>
        </div>
    );
};

export default AddPlayer;