import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Onboard from "./pages/Onboard";
import Apply from "./pages/Apply";
import Navigation from "./components/layout/Navigation";
import ApplyForm from "./pages/Apply/ApplyForm";
import ApplyAdminPage from "./pages/Apply/admin";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Onboard />} />
          {/*<Route path="/apply" element={<Apply />} />*/}
          {/*<Route path="/apply/form" element={<ApplyForm />} />*/}
          <Route path="/apply/admin" element={<ApplyAdminPage />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
