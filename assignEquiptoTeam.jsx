import React from "react";
import { useState, useEffect, map } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './assignEquiptoTeam.css';



const AssignEquiptoTeam = () => {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    const [equipment, setEquipment] = useState([]);
    const [equipmentID, setEquipmentID] = useState();
    const [teams, setTeams] = useState([]);
    const [teamID, setTeamID] = useState();

    const handleAssign = async () => {
        try {
            console.log('assigning equipment to team');
            await axios.post('http://localhost:3000/equipment/teamID/equipment', {equipmentID, teamID});
            
        }catch (error){
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchTeams = async () => {
            try { 
                const response = await axios.get('http://localhost:3000/teams');
                setTeams(response.data);
            }catch (error) {
                console.error(error);
            }
        }
        const fetchEquipment = async () => {
            try { 
                const response = await axios.get('http://localhost:3000/equipment');
                setEquipment(response.data);
            }catch (error) {
                console.error(error);
            }
        }
        fetchEquipment();
        fetchTeams();
    })

    return (
        <div className='assignEquiptoTeam'>
            <h1 style={{textAlign: "center"}}>Assign Equipment to a Team</h1>
            <label>
                Select Equipment:
                <select value={equipmentID} onChange={(e) => setEquipmentID(e.target.value)} required>
                    {equipment.map(equipment => (
                        <option key={equipment.equipmentID} value={equipment.equipmentID}>{equipment.equipmentName}{equipment.attributes}</option>
                    ))}
                </select>
            </label>        
            <label>
                Select Team:
                <select value={teamID} onChange={(e) => setTeamID(e.target.value)} required>
                    {teams.map(team => (
                        <option key={team.teamID} value={team.teamID}>{team.teamName}</option>
                    ))}
                </select>
            </label>            
            <button onClick={handleAssign}>Assign Equipment to Team</button>
        </div>
    )

}

export default AssignEquiptoTeam;