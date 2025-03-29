import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Records from "./pages/Records";
import MarketData from "./pages/MarketData";
import Predictions from "./pages/Predictions";  // Import Predictions page
import "./styles/global.css";
import About from "./pages/About";
import "./styles/Navbar.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router basename="/Gaine_Africa_app">
      <div className="app-container">
        <Navbar />

        {/*  Wrap Routes in a containerr so the footer stays at bottom */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/records" element={<Records />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/market-data" element={<MarketData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
