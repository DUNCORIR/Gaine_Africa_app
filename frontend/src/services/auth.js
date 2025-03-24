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

export async function logoutUser() {
  try {
    await fetch("http://127.0.0.1:5000/api/logout", { method: "POST" }); // ✅ Notify backend
    localStorage.removeItem("user"); // ✅ Remove user from storage
    window.location.href = "/login"; // ✅ Redirect user to login page
  } catch (error) {
    console.error("Error logging out:", error);
  }
}
