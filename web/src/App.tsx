import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboard from "./pages/Onboard";
import Apply from "./pages/Apply";
import NavBar from "./component/Navigation";
import ApplyForm from "./pages/Apply/ApplyForm";
import ApplyAdminPage from "./pages/Apply/admin";
function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Onboard />} />
          {/*<Route path="/apply" element={<Apply />} />*/}
          {/*<Route path="/apply/form" element={<ApplyForm />} />*/}
          <Route path="/apply/admin" element={<ApplyAdminPage />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
