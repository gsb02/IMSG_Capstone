import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

const AssignEquiptoPlayers = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { playerID, playerName, teamID, teamName} = location.state || {};

    const [allEquipment, setAllEquipment] = useState([]);
    const [assignedEquipment, setAssignedEquipment] = useState([]);

    useEffect(() => {
        fetchAllEquipment();
        fetchAssignedEquipment();
    }, []);

    const fetchAllEquipment = async () => {
        try {
          const response = await axios.get('http://localhost:3000/equipment');
          setAllEquipment(response.data);
        } catch (error) {
          console.error('Error fetching equipment:', error);
        }
    };

    const fetchAssignedEquipment = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/players/${playerID}/equipment`);
            setAssignedEquipment(response.data);
        } catch (error) {
            console.error('Error fetching assigned equipment:', error);
        }
    };

    const assignEquipmentToPlayer = async (equipID) => {
        try {
            const equipmentData = {
                playerID, 
                equipmentID: equipID,
            };

            await axios.post(`http://localhost:3000/players/${playerID}/equipment`, equipmentData);
            fetchAssignedEquipment(); 
            fetchAllEquipment();
        } catch (error) {
            console.error('Error assigning equipment:', error);
        }
    };

    return (
        <div>
            <h2>Assign Equipment to {playerName}</h2>
            <div>
                <h3>Assigned Equipment</h3>
                <ul>
                    {assignedEquipment.map((equip, index) => (
                        <li key={index}>{equip.equipmentName} - {equip.equipmentType}</li>
                    ))}
                </ul>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Equipment</th>
                        <th scope="col">Equipment Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allEquipment.map((equip, index) => (
                        <tr key={index}>
                            <td>{equip.equipmentName}</td>
                            <td>{equip.equipmentType}</td>
                            <td>
                                <button onClick={() => assignEquipmentToPlayer(equip.ID)}>Add</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AssignEquiptoPlayers;