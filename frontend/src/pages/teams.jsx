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
                console.error('There was an error fetching the players:', error);
                console.log(error.toJSON());
            }
        };

        fetchTeams();
    }, []);
    return (
        <>
            <h1 style={{ textAlign: "center" }}>UMaine Sports Teams</h1>
            <div>

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