import { BrowserRouter, Routes, Route } from "react-router-dom"
import Teams from "./pages/teams";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element/ {<Home/>}> */}
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
