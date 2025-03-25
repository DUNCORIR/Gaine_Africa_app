import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/images/hero-image.jpg"; // ✅ Import hero image

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to Gaine Africa</h1>
        <p>Empowering smallholder farmers with real-time market data, predictive analytics, and digital record-keeping tools.</p>
        <Link to="/register" className="hero-btn">Get Started</Link>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h2>📊 Market Data</h2>
          <p>Access real-time prices and trends to sell your produce at the best rates.</p>
        </div>
        <div className="feature">
          <h2>🤖 Predictions</h2>
          <p>AI-driven insights to help you optimize crop yields and reduce waste.</p>
        </div>
        <div className="feature">
          <h2>📜 Records</h2>
          <p>Track your farming inputs, expenses, and outputs with ease.</p>
        </div>
      </div>

      {/* Join Now Section */}
      <div className="join-now">
        <h2>Ready to Boost Your Farm's Productivity?</h2>
        <p>Join thousands of farmers using Gaine Africa to make smarter decisions and increase profitability.</p>
        <Link to="/register" className="join-btn">Join Now</Link>
      </div>
    </div>
  );
}

export default Home;