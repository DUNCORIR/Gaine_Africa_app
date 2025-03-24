export function getUser() {
  return JSON.parse(localStorage.getItem("user")) || null; // ✅ Ensure null if no user
}

export function loginUser(user) {
  if (user && user.id) {
    localStorage.setItem("user", JSON.stringify(user)); // ✅ Store email & ID
  } else {
    console.error("Invalid user data:", user);
  }
}

export function logoutUser() {
  localStorage.removeItem("user"); // ✅ Remove user on logout
}
