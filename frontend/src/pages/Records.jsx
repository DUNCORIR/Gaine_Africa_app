import { useEffect, useState } from "react";
import { getUser } from "../services/auth"; // Get logged-in user

function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser(); // Get logged-in user details

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return; // Stop fetching if no user is logged in
    }

    fetch(`http://127.0.0.1:5000/api/users/${user.id}/records`) // ✅ Use user ID
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
        setLoading(false);
      });
  }, [user]);

  if (!user) {
    return <p>Please log in to view your records.</p>;
  }

  return (
    <div>
      <h2>Records</h2>
      {loading ? <p>Loading...</p> : records.length === 0 ? <p>No records found.</p> : (
        <ul>
          {records.map((record) => (
            <li key={record.id}>Input: {record.input} | Output: {record.output}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Records;
