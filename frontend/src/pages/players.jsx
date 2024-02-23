import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './players.css';



const Players = () => {
    const [players, setPlayers] = useState([]);
    const [teamId, setTeamId] = useState('1');

    // Moved the fetching logic to its own function
    const fetchPlayers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/players/team${teamId}`);
            setPlayers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error fetching the players:', error);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, [teamId]);

    const handleDelete = async (playerID) => {
        try {
            await axios.delete(`http://localhost:3000/players/player${playerID}`);
            setPlayers(players.filter(player => player.playerId !== playerID));
        } catch (error) {
            console.error('There was an error deleting the player:', error);
        }
    };

    const handleTeamIdChange = (event) => {
        setTeamId(event.target.value);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Link to="/addPlayer">
                <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Player</button>
            </Link>
            <h1 style={{textAlign: "center"}}>Player List</h1>
            <select value={teamId} onChange={handleTeamIdChange}>
                <option value="1">Men's Basketball</option>
                <option value="2">Women's Field Hockey</option>
                <option value="3">Men's Football</option>
                <option value="4">Men's Ice Hockey</option>
                <option value="5">Women's Soccer</option>
                <option value="6">Women's Softball</option>
            </select>
            <table style = {{ textAlign: "center",  backgroundColor: "white", borderStyle: "solid", margin: "5px", borderCollapse: "collapse"}}>
                <thead>
                <tr>
                    <th scope = "col">Name</th>
                    <th scope = "col">Age</th>
                    <th scope = "col">Class</th>
                    <th scope = "col">Team ID</th>
                    <th scope = "col">Coach</th>
                    <th scope = "col">Jersey Number</th>
                    <th scope = "col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.playerName}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.age}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.class}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.teamID}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.isCoach ? 'Yes' : 'No'}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.jerseyNum}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            <button>Edit</button>
                            <button onClick={() => handleDelete(player.playerId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Players;