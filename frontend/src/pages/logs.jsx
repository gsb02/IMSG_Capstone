import React, {useEffect, useState} from "react"
import axios from 'axios';
import './teams.css'

const LogPage = () => {
    const [logs, setLogs] = useState([]);
    
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/log/a');
                setLogs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('There was an error fetching the logs:', error);
                console.log(error.toJSON());
            }
        };

        fetchLogs();
    }, []);

    return (
        <div className="table-container">
        <h1 style={{ textAlign: "center" }}>Logging History</h1>
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope = "col">Log ID</th>
                    <th scope = "col">Item</th>
                    <th scope = "col">Action</th>
                    <th scope = "col">Item Name</th>
                    <th scope = "col">Date</th>
                </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.item}</td>
                            <td>{log.action}</td>
                            <td>{log.itemName}</td>
                            <td>{log.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
  };
  
  export default LogPage;