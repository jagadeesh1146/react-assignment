# React.js Employee Management Dashboard

## 📌 Project Overview
This project is a **React.js Employee Management Dashboard** developed as part of a web assignment.  
It includes **mock authentication**, **protected routes**, and **employee CRUD operations** with a clean and responsive UI built using **Bootstrap**.

The application demonstrates real-world React concepts such as **Context API**, **state management**, **search & filtering**, and **data persistence**.

---

## 🛠️ Tech Stack
- React.js
- React Router DOM
- Context API
- Bootstrap
- JavaScript (ES6)
- LocalStorage

---

## 🔐 Authentication
- Mock login implementation
- Credentials:
  - **Username:** `admin`
  - **Password:** `admin123`
- Authentication state is managed using **Context API**
- Dashboard is protected using **Protected Routes**
- Login state persists after page refresh

---

## ✨ Features

### Dashboard
- Protected dashboard access
- Logout functionality

### Employee Management
- Add Employee
- Edit Employee
- Delete Employee (with confirmation)
- Active / Inactive status
- Print employee list

### Employee Form
- Full Name
- Gender
- Date of Birth
- Profile Image Upload
- Image Preview before save
- Active / Inactive checkbox
- Form validation
- Same form used for Add & Edit

### Search & Filter
- Search employees by name
- Filter by gender
- Filter by active / inactive status
- Combined filtering
- Clear filters option

### Data Persistence
- Employee data stored in `localStorage`
- Data remains available after browser refresh

---

##  Print Feature
- Implemented using browser native `window.print()`
- Allows printing or saving employee list as PDF

---