import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './players.css';



const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/players/team1');
                setPlayers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('There was an error fetching the players:', error);
                console.log(error.toJSON());
            }
        };

        fetchPlayers();
    }, []);

const handleDelete = async (playerID) => {
    try {
        await axios.delete(`http://localhost:3000/players/player${playerID}`);
        console.log(playerID);
        setPlayers(players.filter(player => players.playerID !== playerID));
    } catch (error) {
        console.error('There was an error deleting the player:', error);
    }
};

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Link to="/addPlayer">
                    <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Player</button>
            </Link>
            <h1 style={{textAlign: "center"}}>Player List</h1>
            <table style = {{ textAlign: "center",  backgroundColor: "white", borderStyle: "solid", margin: "5px", borderCollapse: "collapse"}}>
                <tr>
                    <th scope = "col">
                        Name
                    </th>
                    <th scope = "col">
                        Age
                    </th>
                    <th scope = "col">
                         Class
                    </th>
                </tr>
                {players.map((player, index) => (
                     /*<li style = {{textAlign: "center", backgroundColor: "white", }} key={index}>
                        Name: {player.playerName}, Age: {player.age}, Class: {player.class}
                    </li>*/
                    <tr>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.playerName}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.age}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {player.class}
                        </td>
                        <td  style={{ borderBottom: "1px solid black" }}>
                            <button>Edit</button>
                        </td>
                        <td  style={{ borderBottom: "1px solid black" }}>
                            <button onClick={() => handleDelete(player.playerId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};


export default Players;

