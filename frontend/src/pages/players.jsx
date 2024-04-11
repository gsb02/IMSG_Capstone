import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import './players.css';
import Modal from './Modal.jsx';

const Players = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { teamID, teamName } = location.state || {};

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
        console.log(teamID);
        try {
            const response = await axios.get(`http://localhost:3000/players/team${teamID}`);
            setPlayers(response.data);
        } catch (error) {
            console.error('There was an error fetching the players:', error);
        }
    };

    useEffect(() => {
        if(teamID){
            fetchPlayers();
        }
    }, [teamID]);

    const handleDelete = async () => {
        if (deletePlayerId !== null) {
          try {
            await axios.delete(`http://localhost:3000/players/player${deletePlayerId}`);
            setPlayers(players.filter(player => player.playerID !== deletePlayerId));
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
        <div className="table-container">
            <h1 style={{textAlign: "center"}}>{teamName ? `${teamName} Players` : 'Player List'}</h1>
            <div className="filters-container">
                <Link to="/addPlayer" state={{ teamID: teamID, teamName: teamName}}> 
                    <button className="add-player">Add Player</button>
                </Link>
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
                    style={{ padding: '10px'}}
                />
                <input
                    type="number"
                    placeholder="Filter by age"
                    value={ageFilter}
                    onChange={handleAgeFilterChange}
                    style={{ padding: '10px'}}
                />
            </div>
            <table className="table">
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
                        <td>{player.playerName}</td>
                        <td>{player.age}</td>
                        <td>{player.class}</td>
                        <td>{player.teamID}</td>
                        <td>{player.isCoach ? 'Yes' : 'No'}</td>
                        <td>{player.jerseyNum}</td>
                        <td>
                            <Link to="/assignEquipToPlayer" state={{ playerID: player.playerID, playerName: player.playerName, teamID: teamID, teamName: teamName }}>
                                 <button className="button-link">Assign Equipment</button>
                            </Link>
                            <button>Edit</button>
                            <button onClick={() => initiateDelete(player.playerID)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={handleDelete}>
                Are you sure you want to delete this player?
            </Modal>
        </div>
    );
};

export default Players;
