import react from "react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Equipment = () => {
    const [equipment, setEquipment] = useState( [] )

    useEffect(() =>{
        const fetchEquipment = async ()=>{
            try {
                const res = await axios.get("http:localhost:8800/equipment")
                console.log(res)
                setEquipment(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <div>
            <h1>UMaine Equipment</h1>
            <div className="equipment">
                {equipment.map(equipment=>(
                    <div className="equipment">
                        <h2>{equipment.equipmentName}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Equipment