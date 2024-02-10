import react from "react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Teams = () => {
    const [teams, setTeam] = useState( [] )

    useEffect(() =>{
        const fetchTeams = async ()=>{
            try {
                const res = await axios.get("http:localhost:8800/teams")
                console.log(res)
                setTeam(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <div>
            <h1>UMaine Sports Teams Graham</h1>
            <div className="teams">
                {teams.map(team=>(
                    <div className="team">
                        <h2>{teams.teamName}</h2>
                    </div>
                ))}
            </div>
            <p>
                This the the teams page
            </p>
        </div>
    )
}


export default Teams