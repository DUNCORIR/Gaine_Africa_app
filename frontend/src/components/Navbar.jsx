import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/gaine-logo.png";
import { getUser, logoutUser } from "../services/auth";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(getUser()); // ✅ Get logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getUser()); // ✅ Update user state when login/logout happens
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null); // ✅ Remove user from state
    navigate("/login"); // ✅ Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gaine Africa Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/market-data">Market Data</Link></li>
        <li><Link to="/predictions">Predictions</Link></li>

        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/records">Records</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
