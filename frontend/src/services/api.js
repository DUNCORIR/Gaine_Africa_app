const BASE_URL = "http://127.0.0.1:5000/api";

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};
