import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Gaine Africa Logo */}
        <div className="logo-container">
          <img src="/gaine-logo.png" alt="Gaine Africa Logo" className="logo" />
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
