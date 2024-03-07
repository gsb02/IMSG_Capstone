import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Equipment from "./pages/equipment";
import Teams from "./pages/teams";
import AddPlayer from "./pages/addPlayer";
import AddTeams from './pages/addTeam';
import HomePage from './pages/home';
import Players from './pages/players';
import AddEquip from './pages/AddEquip';
import AssignEquiptoTeam from './pages/assignEquiptoTeam';
import "./style.css";
function App() {
  
  return (
    <div className="App">
      <ul id="links">
        <li><a id="li" href="./">Home</a></li>
        <li><a id="li" href="./teams">Teams</a></li>
        <li><a id="li" href="./equipment">Equipment</a></li>
        <li><a id="li" href="./players">Players</a></li>
        <li><a id="li" href="./settings">Settings</a></li>
        <li><a id="li" href="">Logoff</a></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/equipment" element={<Equipment/>}/>
          <Route path="/AddEquip" element={<AddEquip/>}/>
          <Route path="/assignEquiptoTeam" element={<AssignEquiptoTeam/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/addTeam" element={<AddTeams/>}/>
          <Route path="/players" element={<Players/>} />   
          <Route path="/addPlayer" element={<AddPlayer/>}></Route>    
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;