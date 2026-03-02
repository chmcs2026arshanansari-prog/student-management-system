## Student Management System

A full-stack "Student Management System" built using "MERN Stack" that allows efficient management of student records and fee details.
The application provides features to add, edit, delete, search, and filter students along with automatic fee status calculation.

---
## Project Overview

The Student Management System is designed to simplify student data handling for educational institutes.
It enables administrators to manage student information, track fee payments, and monitor pending amounts through a web interface.

---
## Features

# Student Management

* Add new student records
* Edit existing student details
* Delete students
* View all students in table format

# Fee Management

* Automatic pending amount calculation
* Fee status auto-update (Paid / Pending)
* Total amount collected calculation

# Search & Filter

* Search student using Roll Number
* Filter students:

  * Paid Students
  * Pending Students
  * Show All

# Admin Controls

* Login verification before viewing total collection
* Toast notifications for success & errors

# UI Features

* Responsive design
* Tailwind CSS styling
* DaisyUI components
* Clean dashboard layout

---
# Frontend

* React (Vite)
* Tailwind CSS
* DaisyUI
* Axios
* React Hot Toast

# Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

# Deployment

* Frontend: Render (Static Site)
* Backend: Render (Web Service)
* Database: MongoDB Atlas

---
## Project Structure

```
Student-Management-System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── StudentList.jsx
│   │   │   ├── AddStudent.jsx
│   │   │   └── EditStudent.jsx
│   │   └── App.jsx
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── models
│   │   └── routes
│   └── server.js
│
└── README.md
```

---
## Installation & Setup :-

# 1. Clone Repository

```bash
git clone https://github.com/chmcs2026arshanansari-prog/student-management-system
cd student-management-system
```

---
# 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=mongodb+srv://chmcs2026arshanansari_db_user:oyPYXaou0r7IhhsS@cluster0.hkh2jsu.mongodb.net/studentdb?appName=Cluster0
PORT=3001
```

Run backend:

```bash
npm run dev
```

---
# 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---
# 4. API Endpoints

| Method | Endpoint                   | Description      |
| ------ | -------------------------- | ---------------- |
| GET    | /api/students              | Get all students |
| POST   | /api/students              | Add student      |
| PUT    | /api/students/:id          | Update student   |
| DELETE | /api/students/:id          | Delete student   |
| GET    | /api/students/pendinglist  | Pending students |
| GET    | /api/students/paidlist     | Paid students    |

---
# Automatic Logic Implemented

* Pending Amount = Total Fees − Paid Amount
* Fee Status automatically updates:

  * `paid` → when pending = 0
  * `pending` → when pending > 0

Implemented using "Mongoose pre-save middleware".

---
# Screenshots

<img width="1887" height="903" alt="Screenshot 2026-03-02 164558" src="https://github.com/user-attachments/assets/6a37470d-d09b-472e-ada0-c5f85fbe2163" />

---
# Live Deployment

Frontend: https://student-management-system-frontend-zv8g.onrender.com/

Backend API: https://student-management-system-1-1j2r.onrender.com

---
# Author

Arshan Ansari

Class - SYCS 

Roll No - 02

---
# Future Improvements

* Authentication system (JWT)
* Role-based access
* Admin dashboard analytics
* Export student reports
* Secure API authorization
