import { useEffect, useState } from "react";

function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/records")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.error("Error fetching records:", error));
  }, []);

  return (
    <div>
      <h2>Records</h2>
      {records.length > 0 ? (
        <ul>
          {records.map((record) => (
            <li key={record.id}>{record.name} - {record.details}</li>
          ))}
        </ul>
      ) : (
        <p>No records found.</p>
      )}
    </div>
  );
}

export default Records;

