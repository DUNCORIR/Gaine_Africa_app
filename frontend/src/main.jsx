import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AuthProvider } from "./context/AuthContext"; //  Import AuthProvider
import "./styles/global.css";
import App from "./App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Wrap App with AuthProvider */}
      <App />
    </AuthProvider>
  </StrictMode>
);
