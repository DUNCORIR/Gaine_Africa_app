import { useEffect, useState } from "react";
import { getUser } from "../services/auth";

function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser(); // Get logged-in user details

  console.log("🔍 User data from getUser():", user); // ✅ Debugging line

  useEffect(() => {
    if (!user || !user.id) {  // ✅ Check if user exists & has an ID
      console.warn("⚠️ No user found. Redirecting to login.");
      setLoading(false);
      return;
    }

    fetch(`http://127.0.0.1:5000/api/users/${user.id}/records`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            console.warn(`No records found for user ID ${user.id}`);
            setRecords([]);
            setLoading(false);
            return;
          }
          throw new Error(`Failed to fetch records: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("📄 Records received:", data); // ✅ Debugging line
        setRecords(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
        setRecords([]); // Prevent infinite loop
        setLoading(false);
      });
  }, [user]);

  if (!user || !user.id) {
    return <p>Please log in to view your records.</p>;
  }

  return (
    <div>
      <h2>Records</h2>
      {loading ? (
        <p>Loading...</p>
      ) : records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              <strong>Input:</strong> {record.input} | <strong>Output:</strong> {record.output}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Records;
