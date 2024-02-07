import React, { useEffect, useState } from "react";
import axios from "axios";

const Players = () => {
    const [players, setPlayers] = useState( [] )

    useEffect(() =>{
        const fetchPlayers = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/equipment")
                console.log(res)
                setPlayers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <div>
            <h1>UMaine Players</h1>
            <div className="players">
                {players.map(player=>(
                    <div className="player">
                        <h2>{player.playerName}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Players