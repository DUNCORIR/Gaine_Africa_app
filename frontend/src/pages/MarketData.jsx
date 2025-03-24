import { useEffect, useState } from "react";
import "../styles/MarketData.css"; // Ensure the CSS file exists

function MarketData() {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/market-data") // ✅ Fetch from backend
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch market data");
        }
        return response.json();
      })
      .then((data) => {
        setMarketData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching market data:", error);
        setError("⚠️ Could not load market data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="market-data-container">
      <h1>📊 Market Data</h1>
      {loading && <p>Loading market data...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <table className="market-data-table">
          <thead>
            <tr>
              <th>Crop/Livestock</th>
              <th>Price (KES)</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {marketData.length > 0 ? (
              marketData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No market data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MarketData;
