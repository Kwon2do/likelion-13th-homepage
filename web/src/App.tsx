import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboard from "./pages/Onboard";
import Apply from "./pages/Apply";
import NavBar from "./component/Navigation";
function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Onboard />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
