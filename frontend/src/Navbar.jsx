import { Link } from "react-router-dom";
import logo from "../assets/images/gaine-logo.png"; // Ensure the logo path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gaine Africa Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/market-data">Market Data</Link></li>
        <li><Link to="/predictions">Predictions</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
