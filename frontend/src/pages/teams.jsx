import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import './teams.css'
import Modal from './Modal.jsx';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteTeamID, setDeleteTeamID] = useState(null); // To store the ID of the team being deleted

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:3000/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('There was an error fetching the teams:', error);
            }
        };

        fetchTeams();
    }, []);

    const initiateDelete = (teamID) => {
        setShowModal(true);
        setDeleteTeamID(teamID); // Set the ID of the team to be deleted
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/teams/${deleteTeamID}`);
            setTeams(teams.filter(team => team.teamID !== deleteTeamID));
            setShowModal(false); // Close the modal after deletion
        } catch (error) {
            console.error('There was an error deleting the team:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="table-container">
            <h1 style={{ textAlign: "center" }}>UMaine Sports Teams</h1>
            <div style={{ justifyContent: 'space-between', display: 'flex', marginBottom:'20px' }}>
                <Link to="/addTeam">
                    <button className="add-team">Add Team</button>
                </Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope = "col">Team Name</th>
                    <th scope = "col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.teamID}>
                            <td>{team.teamName}</td>
                            <td>
                                <Link to="/addPlayer" state={{ teamID: team.teamID, teamName: team.teamName }}>
                                    <button>Add Player</button>
                                </Link>
                                <Link to="/players" state={{ teamID: team.teamID, teamName: team.teamName }}>
                                    <button>View Roster</button>
                                </Link>
                                <button>Edit</button>
                                <button onClick={() => initiateDelete(team.teamID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                isOpen={showModal}
                onClose={handleCloseModal}
                onConfirm={handleDelete}
            >
                <p>Are you sure you want to delete this team?</p>
            </Modal>
        </div>
    );
};

export default Teams;
