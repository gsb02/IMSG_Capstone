import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

    return (
        <div>
            <h1>Player List</h1>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        Name: {player.playerName}, Age: {player.age}, Class: {player.class}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Players;

