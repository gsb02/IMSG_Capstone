import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './players.css';

const AddPlayer = ({ onAddPlayer }) => {

    const navigate = useNavigate();
    const handleBackClick = () => {
            navigate(-1);
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sport, setSport] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPlayer({name, age, sport});
        setName('');
        setAge('');
        setSport('');
        navigate('/players');
    }

    return (
        <div>
            <h1>Add a New Player</h1>
            {/* Form for adding a new player */}
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
                </label>
                <label>
                    Sport:
                    <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} required/>
                </label>
                <button type="submit">Add Player</button>
            </form>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default AddPlayer;
