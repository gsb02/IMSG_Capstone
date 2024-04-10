import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

const AssignEquiptoPlayers = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { teamID, teamName, playerId } = location.state || {};

    const [allEquipment, setAllEquipment] = useState([]);
    const [assignedEquipment, setAssignedEquipment] = useState([]);

    useEffect(() => {
        fetchAllEquipment();
    }, []);

    const fetchAllEquipment = async () => {
        try {
          const response = await axios.get('http://localhost:3000/equipment');
          setAllEquipment(response.data);
        } catch (error) {
          console.error('Error fetching equipment:', error);
        }
    };

    const assignEquipmentToPlayer = async (equipId) => {
        try {
          // Correcting the payload to ensure it's structured properly
          const equipmentData = {
            playerId, // Assuming the backend knows how to handle this
            equipmentId: equipId,
          };

          await axios.post(`http://localhost:3000/${playerId}/equipment`, equipmentData);
    
          // Optimistic UI Update
          const assignedItem = allEquipment.find(equip => equip.id === equipId);
          if (assignedItem) {
            setAssignedEquipment(prev => [...prev, assignedItem]);
            setAllEquipment(prev => prev.filter(equip => equip.id !== equipId));
          }
        } catch (error) {
          console.error('Error assigning equipment:', error);
        }
    };

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th scope = "col">Equipment</th>
                    <th scope = "col">Equipment Type</th>
                    <th scope = "col">Stored Quantity</th>
                    <th scope = "col">Distributed Quantity</th>
                    <th scope = "col">Last Ordered</th>
                    <th scope = "col">Last Distributed</th>
                </tr>
                </thead>
                <tbody>
                {allEquipment.map((equip, index) => (//The meet of the webpage is this map function for the equipment.
                    <tr key={index}>
                        <td>
                            {equip.equipmentName}
                        </td>
                        <td>
                            {equip.equipmentType}
                        </td>
                        <td>
                            {equip.storedQuantity}
                        </td>
                        <td>
                            {equip.distQuantity}
                        </td>
                        <td>
                            {equip.lastOrdered}
                        </td>
                        <td>
                            {equip.lastDistributed}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AssignEquiptoPlayers;