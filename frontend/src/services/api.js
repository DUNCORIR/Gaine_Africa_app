const BASE_URL = "http://127.0.0.1:5000/api";

// Function to retrieve JWT token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    headers: getAuthHeaders(),  // ✅ Add JWT token
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.access_token); // ✅ Save token after login
  }
  return data;
};

// ✅ Fetch records for a specific user (with JWT authentication)
export const fetchRecords = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/records`, {
    headers: getAuthHeaders(),  // ✅ Add JWT token
  });

  if (!response.ok) throw new Error("Failed to fetch records");
  return response.json();
};

// ✅ Create a new record (with JWT authentication)
export const createRecord = async (userId, recordData) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/users/${userId}/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}` // Ensure JWT is sent
      },
      body: JSON.stringify(recordData),
      credentials: "include", // Ensure cookies are sent
    });

    if (!response.ok) {
      throw new Error("Failed to create record");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

// ✅ Update Record (with JWT authentication)
export const updateRecord = async (userId, recordId, updatedData) => {
  const response = await fetch(`${BASE_URL}/records/${userId}/${recordId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),  // ✅ Add JWT token
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update record");
  return response.json();
};

// ✅ Delete Record (with JWT authentication)
export const deleteRecord = async (userId, recordId) => {
  const response = await fetch(`${BASE_URL}/records/${userId}/${recordId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),  // ✅ Add JWT token
  });

  if (!response.ok) throw new Error("Failed to delete record");
  return response.json();
};
