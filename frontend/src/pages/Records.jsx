import { useEffect, useState } from "react";
import { getUser } from "../services/auth";
import { fetchRecords, createRecord, updateRecord, deleteRecord } from "../services/api";
import "../styles/Records.css";

function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    crop: "",
    planting: "",
    weeding: "",
    harvesting: "",
    storage: "",
    sales: "",
  });
  const [editingRecord, setEditingRecord] = useState(null);
  const [editData, setEditData] = useState({});
  const user = getUser();

  useEffect(() => {
    if (!user || !user.id) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    fetchRecords(user.id)
      .then((data) => {
        if (isMounted) {
          console.log("✅ Records received:", data);
          setRecords(data);
        }
      })
      .catch((error) => {
        console.error("❌ Error fetching records:", error);
        if (isMounted) setRecords([]);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("⚠️ You must be logged in to add a record.");
      return;
    }

    const recordData = {
      crop: formData.crop,
      planting: parseFloat(formData.planting) || 0,
      weeding: parseFloat(formData.weeding) || 0,
      harvesting: parseFloat(formData.harvesting) || 0,
      storage: parseFloat(formData.storage) || 0,
      sales: parseFloat(formData.sales) || 0,
    };

    try {
      const newRecord = await createRecord(user.id, recordData);
      setRecords([...records, newRecord]);
      setFormData({
        crop: "",
        planting: "",
        weeding: "",
        harvesting: "",
        storage: "",
        sales: "",
      });
    } catch (error) {
      console.error("❌ Error adding record:", error);
      alert("⚠️ Failed to add record.");
    }
  };

  const handleEditClick = (record) => {
    setEditingRecord(record.id);
    setEditData(record);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!window.confirm("Are you sure you want to update this record?")) return;

    try {
      await updateRecord(user.id, editingRecord, editData);
      setRecords((prevRecords) =>
        prevRecords.map((r) => (r.id === editingRecord ? { ...r, ...editData } : r))
      );
      setEditingRecord(null);
    } catch (error) {
      console.error("❌ Error updating record:", error);
    }
  };

  const handleDelete = async (recordId) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await deleteRecord(user.id, recordId);
      setRecords((prevRecords) => prevRecords.filter((r) => r.id !== recordId));
    } catch (error) {
      console.error("❌ Error deleting record:", error);
    }
  };

  if (!user) {
    return <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>⚠️ Please log in to view records.</p>;
  }

  return (
    <div className="records-container">
      <h2>Farming Records</h2>

      {/* ✅ Record Creation Form */}
      <form onSubmit={handleSubmit} className="record-form">
        <input type="text" name="crop" placeholder="Crop Name" value={formData.crop} onChange={handleInputChange} required />
        <input type="number" name="planting" placeholder="Planting Cost" value={formData.planting} onChange={handleInputChange} />
        <input type="number" name="weeding" placeholder="Weeding Cost" value={formData.weeding} onChange={handleInputChange} />
        <input type="number" name="harvesting" placeholder="Harvesting Cost" value={formData.harvesting} onChange={handleInputChange} />
        <input type="number" name="storage" placeholder="Storage Cost" value={formData.storage} onChange={handleInputChange} />
        <input type="number" name="sales" placeholder="Sales Revenue" value={formData.sales} onChange={handleInputChange} />
        <button type="submit">Add Record</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <ul className="record-list">
          {records.map((record) => {
            const totalExpenses = (
              Number(record.planting || 0) +
              Number(record.weeding || 0) +
              Number(record.harvesting || 0) +
              Number(record.storage || 0)  // Fix the variable name
            );
            const profitOrLoss = Number(record.sales || 0) - totalExpenses;

            return (
              <li key={record.id} className="record-item">
                {editingRecord === record.id ? (
                  <div className="edit-form">
                    <input type="text" name="crop" value={editData.crop} onChange={handleEditChange} />
                    <input type="number" name="planting" value={editData.planting} onChange={handleEditChange} />
                    <input type="number" name="weeding" value={editData.weeding} onChange={handleEditChange} />
                    <input type="number" name="harvesting" value={editData.harvesting} onChange={handleEditChange} />
                    <input type="number" name="storage" value={editData.storage} onChange={handleEditChange} />
                    <input type="number" name="sales" value={editData.sales} onChange={handleEditChange} />
                    <button onClick={handleUpdate}>Save</button>
                    <button className="cancel-btn" onClick={() => setEditingRecord(null)}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <strong>Crop:</strong> {record.crop} <br />
                    <strong>Total Expenses:</strong> Ksh {totalExpenses} <br />
                    <strong>Sales Revenue:</strong> Ksh {record.sales} <br />
                    <strong>Profit/Loss:</strong> <span style={{ color: profitOrLoss >= 0 ? "green" : "red" }}>Ksh {profitOrLoss}</span> <br />
                    <button className="edit-btn" onClick={() => handleEditClick(record)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(record.id)}>Delete</button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Records;
