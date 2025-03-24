import { createContext, useContext, useState, useEffect } from "react";
import { getUser, loginUser as saveUser, logoutUser as removeUser } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const handleStorageChange = () => setUser(getUser());
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const loginUser = (userData) => {
    saveUser(userData);
    setUser(userData); // ✅ Instantly update state after login
  };

  const logoutUser = () => {
    removeUser();
    setUser(null); // ✅ Instantly update state after logout
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
