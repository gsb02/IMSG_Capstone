import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import './teams.css'
const Teams = () => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:3000/teams');
                setTeams(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('There was an error fetching the teams:', error);
                console.log(error.toJSON());
            }
        };

        fetchTeams();
    }, []);

    const handleDelete = async (teamID) => {
        try {
            await axios.delete(`http://localhost:3000/teams/${teamID}`);
            console.log(teamID);
            setTeams(teams.filter(team => teams.teamID !== teamID));
            window.location.reload();
        } catch (error) {
            console.error('There was an error deleting the team:', error);
        }
    };

    return (
        <div className="table-container">
            <h1 style={{ textAlign: "center" }}>UMaine Sports Teams</h1>
            <div style={{ justifyContent: 'space-between', display: 'flex', marginBottom:'20px' }}>
                <Link to="/addTeam">
                    <button className="add-team">Add Team</button>
                </Link>
            </div>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope = "col">Team Name</th>
                        <th scope = "col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
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
                                    <button onClick={() => handleDelete(team.teamID)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Teams;