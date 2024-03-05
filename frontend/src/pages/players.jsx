import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import './players.css';
import Modal from './Modal.jsx';


const Players = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { teamId, teamName } = location.state || {};
    const [showModal, setShowModal] = useState(false);
    const [deletePlayerId, setDeletePlayerId] = useState(null);
    const [players, setPlayers] = useState([]);
    const [classFilter, setClassFilter] = useState('All');
    const [nameFilter, setNameFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');

    const initiateDelete = (playerID) => {
        setShowModal(true);
        setDeletePlayerId(playerID);
    };

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
        if(teamId){
            fetchPlayers();
        }
    }, [teamId]);

    const handleDelete = async () => {
        if (deletePlayerId !== null) {
          try {
            await axios.delete(`http://localhost:3000/players/player${deletePlayerId}`);
            setPlayers(players.filter(player => player.playerId !== deletePlayerId));
            setShowModal(false);
            setDeletePlayerId(null);
          } catch (error) {
            console.error('There was an error deleting the player:', error);
          }
        }
      };

    const handleClassFilterChange = (event) =>{
        setClassFilter(event.target.value);
    }

    const handleAgeFilterChange = (event) => {
        setAgeFilter(event.target.value);
    }

    const filteredPlayers = players.filter((player) => {
        const matchesClass = classFilter === 'All'  || player.class === classFilter;
        const matchesName = player.playerName.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesAge = ageFilter === '' || player.age === parseInt(ageFilter);
        return matchesClass && matchesName && matchesAge;
    })

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Link to="/addPlayer" state={{ teamId: teamId, teamName: teamName}}>
                <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Player</button>
            </Link>
            <h1 style={{textAlign: "center"}}>{teamName ? `${teamName} Players` : 'Player List'}</h1>
            {/* <select value={teamId} onChange={handleTeamIdChange}>
                {teams.map((team) => (
                    <option key={team.teamId} value={team.teamId}>{team.teamName}</option>
                ))}
            </select> */}
            <select value={classFilter} onChange={handleClassFilterChange}>
                <option value="All">All Classes</option>
                <option value="FR">Freshman</option>
                <option value="SO">Sophomore</option>
                <option value="JR">Junior</option>
                <option value="SR">Senior</option>
            </select>
            <input
                type="text"
                placeholder="Filter by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                style={{margin: '10px 0', padding: '10px'}}
            />
            <input
                type="number"
                placeholder="Filter by age"
                value={ageFilter}
                onChange={handleAgeFilterChange}
                style={{margin: '10px 0', padding: '10px'}}
            />
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
                {filteredPlayers.map((player, index) => (
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
                            <button onClick={() => initiateDelete(player.playerId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                <Modal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={handleDelete}>
                    Are you sure you want to delete this player?
                </Modal>
                </tbody>
            </table>
        </div>
    );
};

export default Players;