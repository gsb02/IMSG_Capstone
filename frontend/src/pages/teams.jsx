import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        } catch (error) {
            console.error('There was an error deleting the team:', error);
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>UMaine Sports Teams</h1>
            <div>
            <table style = {{ textAlign: "center",  backgroundColor: "white", borderStyle: "solid", margin: "5px", borderCollapse: "collapse"}}>
                <tr>
                    <th scope = "col">
                        Team Name
                    </th>
                </tr>
                {teams.map((team, index) => (
                    <tr>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {team.teamName}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            <Link to={`/players/team${team.teamId}`}>
                            <button>View Roster</button>
                            </Link>   
                            <button>Edit</button>      
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            <button onClick={() => handleDelete(team.teamId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex', marginTop: '350px' }}>
                <Link to="/addTeam">
                    <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Team</button>
                </Link>
            </div>
        </>
    );
};

export default Teams;