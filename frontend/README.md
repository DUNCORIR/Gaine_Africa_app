Gaine Africa - Frontend
Empowering Farmers with Data-Driven Insights

Project Overview
This is the frontend for Gaine Africa, a platform that provides market data, record-keeping, and predictive analytics for farmers. Built with React (Vite), it integrates with a Flask backend to enable users to manage their farming records, access market trends, and predict crop yields.

Tech Stack
Frontend Framework: React (Vite)

Styling: CSS + Tailwind (if enabled)

State Management: React hooks (useState, useEffect)

Routing: React Router

API Calls: Axios

Authentication: JWT-based authentication

Project Structure
graphql
Copy
Edit
frontend/
│── public/                # Static files  
│   ├── index.html         # Main HTML file  
│   ├── styles/            # Public CSS  
│   │   ├── index.css      # Main styles  
│   ├── assets/            # Images & Icons  
│── src/                   # React application source code  
│   ├── assets/            # Project assets (icons, images)  
│   │   ├── icons/  
│   │   ├── images/  
│   ├── components/        # Reusable components  
│   │   ├── Navbar.jsx  
│   │   ├── Footer.jsx  
│   │   ├── Card.jsx  
│   │   ├── Button.jsx  
│   │   ├── ProtectedRoute.jsx  
│   ├── pages/             # Application pages  
│   │   ├── Home.jsx  
│   │   ├── Login.jsx  
│   │   ├── Register.jsx  
│   │   ├── Dashboard.jsx  
│   │   ├── Records.jsx  
│   │   ├── MarketData.jsx  
│   │   ├── Payments.jsx  
│   │   ├── Predictions.jsx  
│   │   ├── Profile.jsx  
│   │   ├── NotFound.jsx  
│   ├── services/          # API and authentication services  
│   │   ├── api.js         # API calls to backend  
│   │   ├── auth.js        # Authentication functions  
│   │   ├── storage.js     # Local storage helpers  
│   ├── styles/            # CSS styles for pages  
│   │   ├── global.css  
│   │   ├── Home.css  
│   │   ├── Login.css  
│   │   ├── Dashboard.css  
│   │   ├── Records.css  
│   │   ├── Profile.css  
│   ├── App.jsx            # Main React component  
│   ├── main.jsx           # ReactDOM entry file  
│── package.json           # Project dependencies  
│── vite.config.js         # Vite configuration  
│── README.md              # Project documentation  
Getting Started
1️⃣ Prerequisites
Ensure you have:

Node.js (v18+) and npm installed

A working Flask backend

2️⃣ Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/Gaine_Africa.git
cd Gaine_Africa/frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Vite will start the server at:
➡ http://localhost:5173/

API Configuration
Backend Base URL: Update src/services/api.js with the correct Flask backend URL.

Example (api.js):

js
Copy
Edit
const BASE_URL = "http://127.0.0.1:5000/api"; 

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};
Routing
React Router is used for navigation in App.jsx:

jsx
Copy
Edit
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
Styling
Global styles are in src/styles/global.css.
Import styles into components:

jsx
Copy
Edit
import "../styles/global.css";
Deployment
To build the frontend for production:

bash
Copy
Edit
npm run build
This generates a dist/ folder. Deploy it on:
✅ Netlify
✅ Vercel
✅ AWS S3

Next Steps
✅ Connect frontend to Flask backend
✅ Implement authentication (JWT)
✅ Add form validation
✅ Improve UI/UX

Contributors
Duncan Korir - Lead Developer
