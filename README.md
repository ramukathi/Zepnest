# 🚀 Zepnest — Service Request Management System

A full-stack Service Request Management Application built using React.js, Node.js, Express.js, and MySQL.

The application allows users to:
- Register/Login securely using JWT Authentication
- Create service requests
- View all requests
- Update request status
- Delete requests
- Upload optional images
- Manage service workflows efficiently

---

# 📌 Project Overview

Zepnest is a real-world service request platform where users can raise service issues such as:

- Plumbing
- Electrical
- Cleaning
- AC Repair
- Home Maintenance

The system allows authenticated users to manage their service requests through a modern responsive dashboard.

---

# ✨ Features

## 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## 📝 Request Management
- Create Service Request
- View All Requests
- View Single Request
- Update Request Status
- Delete Request

## 📷 Image Upload
- Upload service-related images using Multer

## 📱 Responsive UI
- Modern React frontend
- Mobile responsive design

## 🛡️ Security
- Password hashing using bcryptjs
- JWT token authorization
- Protected backend APIs

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Authentication
- JWT (JSON Web Token)
- bcryptjs

## API Testing
- Postman

---

# 📂 Project Structure

```bash
Zepnest App/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/ramukathi/Zepnest.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

## Create `.env` file

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=zepnest_db

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 3️⃣ Create MySQL Database

Open MySQL and run:

```sql
CREATE DATABASE zepnest_db;
```

---

## 4️⃣ Start Backend Server

```bash
npm run dev
```

Expected output:

```bash
🚀 Zepnest backend running at http://localhost:5000
```

---

## 5️⃣ Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
```

---

## 6️⃣ Start Frontend

```bash
npm run dev
```

Open browser:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

# 🔐 Auth APIs

## Register User

```http
POST /api/auth/register
```

## Login User

```http
POST /api/auth/login
```

---

# 📝 Request APIs

## Create Request

```http
POST /api/requests
```

## Get All Requests

```http
GET /api/requests
```

## Get Latest Request

```http
GET /api/requests/latest
```

## Get Single Request

```http
GET /api/requests/:id
```

## Update Request Status

```http
PATCH /api/requests/:id/status
```

## Delete Request

```http
DELETE /api/requests/:id
```

---

# 🔑 Authentication

Protected APIs require JWT token.

Example Header:

```http
Authorization: Bearer YOUR_TOKEN
```

---

# 🧪 API Testing

All APIs were tested successfully using Postman.

The Postman collection includes:
- Register API
- Login API
- Create Request API
- Get Requests API
- Update Status API
- Delete Request API

---

# 📸 Screenshots

Add your project screenshots here.

Example:
- Login Page
- Dashboard
- Create Request Page
- Request List
- Postman API Testing

---

# 🌐 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render / Railway

## Database Hosting
- Railway MySQL

---

# 👨‍💻 Author

## Kathi Ramu

B.Tech — Artificial Intelligence & Machine Learning

Rajeev Gandhi Memorial College of Engineering & Technology

---

# 📄 License

This project is developed for educational and evaluation purposes.
