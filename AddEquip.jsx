import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./addEquip.css"


const AddEquip = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
}

    //Setting up use states for all possible equipment types
    const [equipmentName, setEquipmentName] = useState('');
    const [storedQuantity, setStoredQuantity] = useState('');
    const [distQuantity, setDistQuantity] = useState('');
    const [sportID, setSportID] = useState(2);
    const [equipmentType, setEquipmentType] = useState(0);
    const [lastOrdered, setLastOrdered] = useState('');
    const [lastDistributed, setLastDistributed] = useState('');
    const [sports, setSports] = useState([]);
    const [attributes, setAttributes1] = useState({});
    // The attributes, being subtables, are created as empty tables, then handled down below as inputs are entered.

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(`submitting equipment`);
            console.log(attributes);
            await axios.post('http://localhost:3000/equipment', { equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed, attributes });
            //navigate('/equipment'); // Navigate after successful addition
        } catch (error) {
                console.error('There was an error adding the equipment:', error);
        }
        }//This is the final post request when submitting to the database


    //The following handle commands are what handle the changes within the attribute tables. 
    const handleBrandChange = (e) => {
        let updatedValue = {};
        updatedValue = {brandName: e.target.value};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleSmallChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {qSmall: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleMediumChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {qMed: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleLargeChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {qLarge: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleXLChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {qXL: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleXXLChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {qXXL: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handle3XChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q3X: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }
    

    //This fetches the sports for the sport dropdown menu
    useEffect(() => {
        const fetchSports = async () => {
          try {
            const response = await axios.get('http://localhost:3000/sports');
            setSports(response.data); // Assuming response.data is an array of sports
          } catch (error) {
            console.error('Error fetching sports:', error);
          }
        };
      
        fetchSports();
      }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px', 
        position: 'relative',
        width: '100%'
    };

    const inputStyle = { 
        width: '300px', 
        height: '30px',
        marginTop: '5px', 
    };

    const formGroupStyle = { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        marginBottom: '15px', 
        width: '100%', 
        maxWidth: '300px', 
    };

    // The output to the webpage
    return (
        <div className='addEquip'>
            <h1 style={containerStyle}>Add New Equipment</h1>
                <label>
                    Equipment:
                    <select value={equipmentType} onChange={(e) => setEquipmentType(Number(e.target.value))} required>
                        <option>Select a type</option>
                        <option value='1'>Apparel</option>
                        <option value='2'>Accessory</option>
                        <option value='3'>Shoes</option>
                        <option value='4'>Jersey</option>
                    </select>
                </label>
            {equipmentType && ( // The dropdown menu above the the statements that follow dictate what is displayed, and enterable for the corresponding equipment type
                <div>
                    {equipmentType === 1 && 
                        <div style={formGroupStyle}>
                        <label>
                            Equipment Name: 
                            <input style={inputStyle} type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} required/>
                        </label>
                        <label>
                            Quantity Stored: 
                            <input style={inputStyle} type="text" value={storedQuantity} onChange={(e) => setStoredQuantity(e.target.value)} required/>
                        </label>
                        <label>
                            Quantity Distributed: 
                            <input style={inputStyle} type="text" value={distQuantity} onChange={(e) => setDistQuantity(e.target.value)} required/>
                        </label>
                        <label>
                            Last Ordered Date: 
                            <input style={inputStyle} type="text" value={lastOrdered} onChange={(e) => setLastOrdered(e.target.value)} required/>
                        </label>
                        <label>
                            Last Distributed Date: 
                            <input style={inputStyle} type="text" value={lastDistributed} onChange={(e) => setLastDistributed(e.target.value)} required/>
                        </label>
                        <label>
                            Brand Name: 
                            <input style={inputStyle} type="text" name="brandName" onChange={(e) => handleBrandChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Smalls: 
                            <input style={inputStyle} type="number" name="qSmall" onChange={(e) => handleSmallChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Mediums: 
                            <input style={inputStyle} type="number" name="qMed" onChange={(e) => handleMediumChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Larges: 
                            <input style={inputStyle} type="number" name="qLarge" onChange={(e) => handleLargeChange(e)} required/>
                        </label>
                        <label>
                            Quantity of X-Larges: 
                            <input style={inputStyle} type="number" name="qXL" onChange={(e) => handleXLChange(e)} required/>
                        </label>
                        <label>
                            Quantity of XXLs: 
                            <input style={inputStyle} type="number" name="qXXL" onChange={(e) => handleXXLChange(e)} required/>
                        </label>
                        <label>
                            Quantity of 3XL: 
                            <input style={inputStyle} type="number" name="q3X" onChange={(e) => handle3XChange(e)} required/>
                        </label>
                        </div>
                    }
                    {equipmentType === "2" && 
                        <label>
                        Equipment Name: 
                        <input type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} required/>
                        </label>
                    }
                </div>
            )}
            <button onClick={handleSubmit}>Add</button>
            <button onClick={handleBackClick}>Back</button>
        </div>
    )
}


export default AddEquip;