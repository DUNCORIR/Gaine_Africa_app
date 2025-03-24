import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // ✅ Use Auth Context
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { loginUser } = useAuth(); // ✅ Get loginUser from AuthContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous message

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });

      console.log("🔍 Debug: Backend Response:", response.data);

      if (response.data.user && response.data.user.id) {
        loginUser({
          email: response.data.user.email,
          id: response.data.user.id,
          name: response.data.user.name,
        });

        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setMessage("⚠️ Error: Missing user ID in response.");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {message && <p className="login-message">{message}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
