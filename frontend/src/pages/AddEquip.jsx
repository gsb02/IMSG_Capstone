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
    const [jerseyNumbers, setJerseyNumbers] = useState({});

    // The attributes, being subtables, are created as empty tables, then handled down below as inputs are entered.

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(`submitting equipment`);
            console.log(attributes);
            console.log(jerseyNumbers);
            await axios.post('http://localhost:3000/equipment', { equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed, attributes });
            navigate('/equipment'); // Navigate after successful addition
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
    
    const handleNameChange = (e) => {
        let updatedValue = {};
        let updatedName = (e.target.value);
        updatedValue = {name: updatedName};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ6Change = (e) => {
        let updatedValue = {};
        let updatedNum = (e.target.value);
        updatedValue = {q_6: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }
    
    const handleQ65Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_6_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ7Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_7: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ75Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_7_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ8Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_8: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ85Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_8_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ9Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_9: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ95Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_9_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ10Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_10: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ105Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_10_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ11Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_11: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ115Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_11_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ12Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_12: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ125Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_12_5: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleQ13Change = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {q_13: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue
        }));
    }

    const handleSmallJerseyChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {smallJerseys: updatedNum};
        setJerseyNumbers(jerseyNumbers => ({
            ...jerseyNumbers,
            ...updatedValue
        }));
    }

    const handleMediumJerseyChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {mediumJerseys: updatedNum};
        setJerseyNumbers(jerseyNumbers => ({
            ...jerseyNumbers,
            ...updatedValue
        }));
    }

    const handleLargeJerseyChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {largeJerseys: updatedNum};
        setJerseyNumbers(jerseyNumbers => ({
            ...jerseyNumbers,
            ...updatedValue
        }));
    }

    const handleXLJerseyChange = (e) => {
        let updatedValue = {};
        let updatedNum = Number(e.target.value);
        updatedValue = {xLJerseys: updatedNum};
        setJerseyNumbers(jerseyNumbers => ({
            ...jerseyNumbers,
            ...updatedValue
        }));
    }

    const handleJerseyColorChange = (e) => {
        let updatedValue = {};
        let updatedNum = (e.target.value);
        updatedValue = {color: updatedNum};
        setAttributes1(attributes => ({
            ...attributes,
            ...updatedValue,
            jerseyNumbers
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
                            <input style={inputStyle} type="date" value={lastOrdered} onChange={(e) => setLastOrdered(e.target.value)} required/>
                        </label>
                        <label>
                            Last Distributed Date: 
                            <input style={inputStyle} type="date" value={lastDistributed} onChange={(e) => setLastDistributed(e.target.value)} required/>
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
                    {equipmentType === 2 && 
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
                            <input style={inputStyle} type="date" value={lastOrdered} onChange={(e) => setLastOrdered(e.target.value)} required/>
                        </label>
                        <label>
                            Last Distributed Date: 
                            <input style={inputStyle} type="date" value={lastDistributed} onChange={(e) => setLastDistributed(e.target.value)} required/>
                        </label>
                        </div>
                    }
                    {equipmentType === 3 && 
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
                            <input style={inputStyle} type="date" value={lastOrdered} onChange={(e) => setLastOrdered(e.target.value)} required/>
                        </label>
                        <label>
                            Last Distributed Date: 
                            <input style={inputStyle} type="date" value={lastDistributed} onChange={(e) => setLastDistributed(e.target.value)} required/>
                        </label>
                        <label>
                            Name: 
                            <input style={inputStyle} type="text" name="brandName" onChange={(e) => handleNameChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 6s: 
                            <input style={inputStyle} type="number" name="q_6" onChange={(e) => handleQ6Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 6.5s: 
                            <input style={inputStyle} type="number" name="q_6_5" onChange={(e) => handleQ65Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 7s: 
                            <input style={inputStyle} type="number" name="q_7" onChange={(e) => handleQ7Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 7.5s: 
                            <input style={inputStyle} type="number" name="q_7_5" onChange={(e) => handleQ75Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 8s: 
                            <input style={inputStyle} type="number" name="q_8" onChange={(e) => handleQ8Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 8.5s: 
                            <input style={inputStyle} type="number" name="q_8_5" onChange={(e) => handleQ85Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 9s: 
                            <input style={inputStyle} type="number" name="q_9" onChange={(e) => handleQ9Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 9.5s: 
                            <input style={inputStyle} type="number" name="q_9_5" onChange={(e) => handleQ95Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 10s: 
                            <input style={inputStyle} type="number" name="q_10" onChange={(e) => handleQ10Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 10.5s: 
                            <input style={inputStyle} type="number" name="q_10_5" onChange={(e) => handleQ105Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 11s: 
                            <input style={inputStyle} type="number" name="q_11" onChange={(e) => handleQ11Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 11.5s: 
                            <input style={inputStyle} type="number" name="q_11_5" onChange={(e) => handleQ115Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 12s: 
                            <input style={inputStyle} type="number" name="q_12" onChange={(e) => handleQ12Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 12.5s: 
                            <input style={inputStyle} type="number" name="q_12_5" onChange={(e) => handleQ125Change(e)} required/>
                        </label>
                        <label>
                            Quantity of Size 13s: 
                            <input style={inputStyle} type="number" name="q_13" onChange={(e) => handleQ13Change(e)} required/>
                        </label>
                        </div>
                    }
                    {equipmentType === 4 && 
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
                            <input style={inputStyle} type="date" value={lastOrdered} onChange={(e) => setLastOrdered(e.target.value)} required/>
                        </label>
                        <label>
                            Last Distributed Date: 
                            <input style={inputStyle} type="date" value={lastDistributed} onChange={(e) => setLastDistributed(e.target.value)} required/>
                        </label>
                        <label>
                            Quantity of Small Jerseys: 
                            <input style={inputStyle} type="number" name="smallJerseys" onChange={(e) => handleSmallJerseyChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Medium Jerseys: 
                            <input style={inputStyle} type="number" name="mediumJerseys" onChange={(e) => handleMediumJerseyChange(e)} required/>
                        </label>
                        <label>
                            Quantity of Large Jerseys: 
                            <input style={inputStyle} type="number" name="largeJerseys" onChange={(e) => handleLargeJerseyChange(e)} required/>
                        </label>
                        <label>
                            Quantity of X-Large Jerseys: 
                            <input style={inputStyle} type="number" name="xLJerseys" onChange={(e) => handleXLJerseyChange(e)} required/>
                        </label>
                        <label>
                            Color of Jerseys: 
                            <input style={inputStyle} type="text" name="color" onChange={(e) => handleJerseyColorChange(e)} required/>
                        </label>
                        </div>
                    }
                </div>
            )}
            <button onClick={handleSubmit}>Add</button>
            <button onClick={handleBackClick}>Back</button>
        </div>
    )
}


export default AddEquip;