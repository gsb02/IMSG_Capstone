import React, { useState } from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Equipment from "./pages/equipment";
import Teams from "./pages/teams";
import Players from "./pages/players";
import AddPlayer from "./pages/addPlayer";
import "./style.css"

function App() {
  const [players,setPlayers] = useState([]);

  const addPlayer = (playerData) => {
    setPlayers(prevPlayers => [...prevPlayers, playerData]);
  };
  return (
    <div className="App">
      <ul id="links">
        <li><a id="links" href="./">Home</a></li>
        <li><a id="links" href="./equip">Equipment</a></li>
        <li><a id="links" href="./teams">Teams</a></li>
        <li><a id="links" href="./players">Players</a></li>
        <li><a id="links" href="./settings">Settings</a></li>
        <li><a id="links" href="">Logoff</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path = "/equip" element={<Equipment/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/players" element={<Players players={players} />}/>
          <Route path="/add-player" element={<AddPlayer onAddPlayer={addPlayer} />} />        
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
