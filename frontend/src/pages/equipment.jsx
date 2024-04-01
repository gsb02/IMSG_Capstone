import React from "react"
import axios from "axios"
import { useEffect, useState, table, Link } from "react"
import { useNavigate } from "react-router-dom"
import './equipment.css';

const Equipment = () => {
    const [equipment, setEquipment] = useState( [] )
    const navigate = useNavigate();

    const fetchAllEquipment = async ()=>{ //Just the general get all equipment call
        try {
            const res = await axios.get("http://localhost:3000/equipment")
            console.log(res)
            setEquipment(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchEquipmentByType = async ()=>{//Will be used for filtering
        try {
            const res = await axios.get("http://localhost:3000/equipment/type${type}")
            console.log(res)
            setEquipment(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchEquipmentTypes = async ()=>{//Will be used to get all equipment types if needed
        try {
            const res = await axios.get("http://localhost:3000/equipment/types")
            console.log(res)
            setEquipment(res.data)
        } catch (error) {
            console.log(error)
        }
    }    

    useEffect(() =>{
        fetchAllEquipment();
    }, [equipment])

    const handleClick = () => {
        navigate('/AddEquip')
    }
    const handleAssigntoTeam = () => {
        navigate('/assignEquiptoTeam')
    }

    return (
        <div className="table-container">
            <h1 style={{textAlign: "center"}}>Equipment List</h1>

            <div style={{display: 'flex', justifyContent: 'left', marginBottom: '20px'}}>
            <button onClick={handleClick}className="add-equip">Add Equip</button>
            <button onClick={handleAssigntoTeam}className="assign-equip">Assign Equipment to Team</button>
            </div>
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
                {equipment.map((equip, index) => (//The meet of the webpage is this map function for the equipment.
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

export default Equipment