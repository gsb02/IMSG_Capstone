import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

const AssignEquiptoPlayers = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { playerID, playerName, teamID, teamName} = location.state || {};

    const [allEquipment, setAllEquipment] = useState([]);
    const [assignedEquipment, setAssignedEquipment] = useState([]);
    const [assignInputQuantities, setAssignInputQuantities] = useState({});
    const [removeInputQuantities, setRemoveInputQuantities] = useState({});


    useEffect(() => {
        fetchAllEquipment();
        fetchAssignedEquipment();
    }, []);

    const fetchAllEquipment = async () => {
        try {
            const response = await axios.get('http://localhost:3000/equipment');
            setAllEquipment(response.data);
            const initialQuantities = {};
            response.data.forEach(equip => {
                initialQuantities[equip.equipmentID] = '';
            });
            setAssignInputQuantities(initialQuantities);
            setRemoveInputQuantities(initialQuantities);
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

    const assignEquipmentToPlayer = async (equipmentID, quantity) => {
        try {
            if (quantity < 1) {
                alert("Quantity must be at least 1.");
                return;
            }
            const equipmentData = {
                equipmentID: equipmentID,
                quantity: quantity
            };

            await axios.post(`http://localhost:3000/players/${playerID}/equipment`, equipmentData);
            fetchAssignedEquipment(); 
            fetchAllEquipment();
        } catch (error) {
            console.error('Error assigning equipment:', error);
        }
    };

    const removeEquipmentFromPlayer = async (equipmentID, quantityToRemove) => {
        try {
            const updatedQuantity = { quantity: quantityToRemove };
            console.log(updatedQuantity.quantity);
            await axios.post(`http://localhost:3000/players/${playerID}/equipment/${equipmentID}`, updatedQuantity);
            fetchAssignedEquipment();
        } catch (error) {
            console.error('Error updating equipment for player:', error);
        }
    };
    

    const handleQuantityChange = (equipmentID, quantity) => {
        setAssignInputQuantities({
            ...assignInputQuantities,
            [equipmentID]: quantity
        });
    };

    const handleRemoveQuantityChange = (equipmentID, quantity) => {
        setRemoveInputQuantities({
            ...removeInputQuantities,
            [equipmentID]: Math.abs(quantity) // Store as positive for simplicity, signify removal elsewhere
        });
    };

    return (
        <div>
            <h2>Assign Equipment to {playerName}</h2>
            <div>
                <h3>Assigned Equipment</h3>
                <ul>
                    {assignedEquipment.map((equip, index) => (
                        <li key={index}>
                            {equip.equipmentName} - {equip.quantity} - {equip.equipmentID}
                            <input
                                type="number"
                                value={removeInputQuantities[equip.equipmentID] || ""}
                                onChange={(e) => handleRemoveQuantityChange(equip.equipmentID, e.target.value)}
                                min="1"
                            />
                            <button onClick={() => removeEquipmentFromPlayer(equip.equipmentID, parseInt(removeInputQuantities[equip.equipmentID] || 0))}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Equipment</th>
                        <th scope="col">Equipment Type</th>
                        <th scope="col">Stored Quantity</th>
                        <th scope="col">Quantity to Assign</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allEquipment.map((equip, index) => (
                        <tr key={index}>
                            <td>{equip.equipmentName}</td>
                            <td>{equip.equipmentType}</td>
                            <td>{equip.storedQuantity}</td>
                            <td>
                                <input
                                    type="number"
                                    value={assignInputQuantities[equip.equipmentID] || ""}
                                    onChange={(e) => handleQuantityChange(equip.equipmentID, e.target.value)}
                                    min="1"
                                />
                            </td>
                            <td>
                            <button onClick={() => assignEquipmentToPlayer(equip.equipmentID, parseInt(assignInputQuantities[equip.equipmentID] || 0))}>Add</button>
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