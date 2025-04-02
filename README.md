Gaine Africa
![Gaine Africa Logo](landing-page.png)
📌 Introduction
Gaine Africa is a digital agriculture platform that enables smallholder farmers to make data-driven decisions by providing:
✅ Real-time market data for better pricing decisions.
✅ Digital record-keeping for tracking farm activities and finances.
✅ Predictive analytics to forecast crop yields based on historical data and weather patterns.
✅ Future secure payments via M-Pesa and Airtel Money for premium features.

⚡ Live Demo
🌍 Gaine Africa Live
https://duncorir.github.io/Gaine_Africa_app/

Authors: 
- **Duncan Korir** - [LinkedIn](https://www.linkedin.com/in/duncorir)
- GitHub: [duncorir](https://github.com/duncorir)

📢 Read our project blog: Blog Article: 
https://medium.com/@duncorir/gaine-africa-bridging-the-digital-divide-in-african-agriculture-b689c8288fd3

Empowering smallholder farmers with real-time market data, digital record-keeping, and predictive analytics for smarter farming.

⭐ Star us on GitHub — it motivates us to keep improving! ⭐

📌 Table of Contents

🚀 Overview

📂 Project Structure

🔥 Features

🛠️ Technologies

📚 Setup Instructions

📖 API Endpoints

🤝 Contributing

📜 License

📞 Contact

🚀 Overview

Gaine Africa is a data-driven agricultural platform that helps farmers:

Access real-time market prices 📊

Keep digital farm records 📝

Leverage AI-powered predictions 🤖

(Upcoming) Securely pay using M-Pesa or Airtel Money 💰

By integrating modern technology, we aim to improve decision-making and maximize productivity for smallholder farmers.

📂 Project Structure

Gaine-Africa-app/
├── backend/                # Backend (Flask + PostgreSQL)
│   ├── app/
│   │   ├── models/         # Database models
│   │   ├── routes.py       # API routes
│   │   ├── services.py     # Business logic
│   ├── config.py           # Configuration settings
│   ├── requirements.txt    # Python dependencies
│   └── run.py              # Application entry point
│
├── frontend/               # Frontend (React)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API service calls
│   │   ├── App.js          # Main app component
│   │   ├── index.js        # React entry point
│   └── styles/             # Styling (CSS/Tailwind)
│
├── README.md               # Documentation
└── .gitignore              # Ignore unnecessary files

🔥 Features

✅ Real-Time Market Data: View latest commodity prices

✅ Digital Record-Keeping: Track farm inputs, yields, and expenses

✅ AI-Based Predictions(Future Update): Smart insights for better decision-making

✅ Secure Payments (Future Update): M-Pesa & Airtel Money support

🛠️ Technologies

Category

Tech Stack

Frontend

React.js, Tailwind CSS, Axios

Backend

Flask (Python), PostgreSQL, SQLAlchemy

AI/ML

scikit-learn, TensorFlow

Payments (Planned)

M-Pesa API, Airtel Money API

Hosting

Heroku (backend), Netlify (frontend)

📚 Setup Instructions

Backend (Flask)

1️⃣ Clone the repository:

git clone https://github.com/duncorir/Gaine_africa-app.git
cd Gaine_africa-app/backend

2️⃣ Set up a virtual environment:

python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

3️⃣ Install dependencies:

pip install -r requirements.txt

4️⃣ Set up the database:

Ensure MySQL is installed and running.
Update config.py with your database credentials:

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:maunyit@localhost/gaine_africa'
SQLALCHEMY_TRACK_MODIFICATIONS = False

5️⃣ Run the backend:

python run.py

Frontend (React)

1️⃣ Navigate to the frontend directory:

cd ../frontend

2️⃣ Install dependencies:

npm install

3️⃣ Run the frontend:

npm start

🔗 API Endpoints
🛡 User Authentication
POST /api/register - Register a new user

POST /api/login - Authenticate and log in a user

📊 Market Data
GET /api/market-data - Fetch real-time market prices

📜 Record-Keeping
POST /api/record-keeping - Add a new farm record

GET /api/record-keeping - Retrieve farm records

📈 Predictive Analytics
GET /api/predictive-analytics - AI-driven crop yield forecasts

## Usage
- Users can **register** and **log in** to their accounts.
- Farmers can access **real-time market prices** for agricultural products.
- AI-driven **predictive analytics** help optimize farming decisions.
- Digital **record-keeping tools** enable farmers to track expenses and sales.

🤝 Contributing

We welcome contributions! 🛠️

Fork the repository

Create a new branch (git checkout -b feature/new-feature)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature/new-feature)

Open a Pull Request 🎉

For detailed contribution guidelines, check CONTRIBUTING.md.

🌟 Related Projects
If you're interested in agritech and AI, check out these projects:

FarmStack - A blockchain-based farming ledger

CropPredict AI - AI-based crop yield predictions

AgriFinance - Micro-financing solutions for farmers

📜 License

This project is MIT licensed. See the LICENSE file for details.

📞 Contact

📧 Duncan Korir - duncorir@gmail.com🔗 
📧 Email: duncorir@gmail.com
🔗 LinkedIn: Duncan Korir
📂 GitHub: duncorir

💡 Transforming agriculture with technology – one farm at a time! 🚜🌾

# Sreeen Shots
![Screenshot 1](public/hero-image.jpg)