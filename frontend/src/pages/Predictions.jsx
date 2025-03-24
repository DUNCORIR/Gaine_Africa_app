import { useEffect, useState } from "react";
import "../styles/Predictions.css"; // Ensure the CSS file exists

function Predictions() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/predictions")
      .then((response) => response.json())
      .then((data) => {
        setPredictions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching predictions:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="predictions-container">
      <h2>AI-Based Crop Predictions</h2>
      {loading ? (
        <p>Loading predictions...</p>
      ) : predictions.length === 0 ? (
        <p>No predictions available.</p>
      ) : (
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>
              <strong>Crop:</strong> {prediction.crop} <br />
              <strong>Expected Yield:</strong> {prediction.yield} tons <br />
              <strong>Market Price:</strong> Ksh {prediction.market_price} per ton
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Predictions;
