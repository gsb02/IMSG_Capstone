import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Equip from "./pages/Equip";
import Teams from "./pages/teams";
import "./style.css"

function App() {
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
          <Route path = "/Equip" element={<Equip/>}/>
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
