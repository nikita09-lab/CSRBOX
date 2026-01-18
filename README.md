🩺 MediscanAI

AI-Powered Medical Scan Analysis Platform

🌐 Live Demo: https://csrbox.onrender.com/

📌 Overview

MediscanAI is a CSR-focused web application designed to assist healthcare accessibility by leveraging AI for medical scan analysis.
The platform enables users to upload medical scans, receive AI-driven insights, and securely manage medical data in a digital environment.

This project aligns with CSR objectives by supporting early diagnosis, digital healthcare, and scalable medical assistance.

🎯 Problem Statement

In many regions, access to timely medical diagnosis is limited due to:

Shortage of medical professionals

High diagnostic costs

Delays in scan analysis

Lack of digital healthcare infrastructure

These challenges often lead to late detection of diseases and increased health risks.

💡 Solution

MediscanAI addresses these issues by:

Providing an AI-assisted scan analysis system

Offering a web-based, easy-to-use platform

Reducing dependency on immediate manual analysis

Digitally storing and managing patient scan data

Supporting healthcare initiatives under CSR programs

🧠 Key Features

📤 Upload medical scans (X-ray, reports, etc.)

🤖 AI-powered scan analysis (extensible)

📊 Digital report generation

🔐 Secure data handling

🌐 Web-based access from anywhere

🏥 CSR-ready healthcare solution

🛠 Tech Stack
Frontend

React.js

HTML5

CSS3 / Tailwind CSS

JavaScript

Backend

Node.js / Express (or FastAPI – extensible)

REST APIs

Database

MongoDB (for patient & report data)

AI / Data Layer

GROQ API (Sanity CMS integration – planned)

AI model integration ready

Deployment

Render (Hosting)

🧩 Architecture Overview
User → Frontend (React)
     → Backend API
     → Database (Medical Data)
     → AI / GROQ API (Insights)
     → Response to User

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/mediscanAI.git
cd mediscanAI

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file:

PORT=5000
DATABASE_URL=your_database_url
GROQ_API_KEY=your_groq_key

4️⃣ Run the Project
npm start

🔒 Security & Privacy

Environment-based API key protection

No hard-coded sensitive data

Secure backend API handling

📈 Future Enhancements

Advanced AI scan interpretation

Doctor dashboard

Patient history tracking

Multilingual support

Mobile application version

Real-time diagnostics support

🤝 CSR Impact

Improves healthcare accessibility

Supports early disease detection

Encourages digital healthcare adoption

Scalable for NGOs & rural health programs

👨‍💻 Contributors

Project Name: MediscanAI

Developed for: CSR Initiative

Role: Full Stack Development & AI Integration

📄 License

This project is developed for educational and CSR purposes only.
