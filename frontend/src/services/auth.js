export function getUser() {
  return JSON.parse(localStorage.getItem("user")); // Retrieve logged-in user
}

export function loginUser(user) {
  localStorage.setItem("user", JSON.stringify(user)); // Save user to storage
}

export function logoutUser() {
  localStorage.removeItem("user"); // Remove user on logout
}
