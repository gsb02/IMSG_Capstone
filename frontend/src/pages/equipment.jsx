import React from "react"
import axios from "axios"
import { useEffect, useState, table, Link } from "react"
import { useNavigate } from "react-router-dom"

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

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1 style={{textAlign: "center"}}>Equipment List</h1>
            <table style = {{ textAlign: "center",  backgroundColor: "white", borderStyle: "solid", margin: "5px", borderCollapse: "collapse"}}>
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
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.equipmentName}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.equipmentType}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.storedQuantity}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.distQuantity}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.lastOrdered}
                        </td>
                        <td style={{ borderBottom: "1px solid black" }}>
                            {equip.lastDistributed}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={handleClick}style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Equip</button>
        </div>
    );
}

export default Equipment