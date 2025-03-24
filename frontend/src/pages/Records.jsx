import { useEffect, useState } from "react";
import { getUser } from "../services/auth"; // Import function to get logged-in user

function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUser(); // Get logged-in user details

  useEffect(() => {
    if (!user || !user.id) {
      setLoading(false);
      return; // Stop fetching if no user is logged in
    }

    let isMounted = true; // ✅ Prevents setting state after unmount

    fetch(`http://127.0.0.1:5000/api/users/${user.id}/records`)
      .then((response) => {
        if (!response.ok) {
          console.warn(`⚠️ No records found for user ID ${user.id}`);
          return [];
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          console.log("✅ Records received:", data);
          setRecords(data);
        }
      })
      .catch((error) => {
        console.error("❌ Error fetching records:", error);
        if (isMounted) {
          setRecords([]); // Prevent infinite loop
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // ✅ Cleanup function to stop unwanted re-fetching
    };
  }, [user?.id]); // ✅ Only re-run when `user.id` changes

  if (!user) {
    return <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>⚠️ Please log in to view your records.</p>;
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
