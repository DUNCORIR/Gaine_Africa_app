import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, logoutUser } from "../services/auth";
import { FaSearch } from "react-icons/fa"; // ✅ Import Search Icon
import logo from "../assets/images/gaine-logo.png";
import textLogo from "../assets/images/gaine-logoo.png";

function Navbar() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getUser());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Gaine Africa Logo" className="logo" />
        <img src={textLogo} alt="Gaine Africa Text Logo" className="text-logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/market-data">Market Data</Link></li>
        <li><Link to="/predictions">Predictions</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user && <li><Link to="/records">Records</Link></li>}
      </ul>

      {/* Right Section: Login, Register, Search, CTA */}
      <ul className="navbar-right">
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        )}

        {/* Search Icon */}
        <li className="search-icon">
          <FaSearch />
        </li>

        {/* Get Started Button */}
        <li>
          <Link to="/register" className="cta-btn">Get Started</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;