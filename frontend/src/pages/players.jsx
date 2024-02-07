import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './players.css';

const Players = ({players}) => {

    const navigate = useNavigate();

    const handleAddPlayerClick = () => {
        navigate('/add-player');
    }

    return (
        <div>
            <body className = "page">
                <h1>UMaine Players</h1>
                <div className="players">
                    {players.map((player, index) =>(
                        <div key={index} className="player">
                            <h2>{player.name}</h2>
                            <p>Age: {player.age}</p>
                            <p>Sport: {player.sport}</p>
                        </div>
                    ))}
                </div>
                <button className = "button" onClick={handleAddPlayerClick}>Add Player </button>
            </body>        
        </div>
    )
}

export default Players