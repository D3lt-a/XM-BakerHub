
# XM-BakeryHub 🍞

> A modern web application built using Node.js and MySQL for managing inventory, sales, and customer orders for XM Bakeries, located in Kigali City, Rwanda.

---

## 📌 Project Overview

**XM-BakeryHub** is a backend system designed to replace traditional Excel-based tracking with a dynamic, scalable, and real-time inventory and sales management solution. It helps bakery staff manage product inventory, record sales, process and track customer orders, generate reports, and manage customer information — all in one place.

---

## ⚙️ Core Features

- 🔐 User Authentication (JWT-based)
- 📦 Product Management (CRUD)
- 📊 Real-Time Inventory Tracking
- 💸 Sales and Purchase Order Recording
- 📍 Order Delivery Tracking
- 🔍 Advanced Search, Filter, and Sort Capabilities
- 📈 Automated Report Generation (Sales & Inventory)
- 👥 Customer Information Management
- ☁️ Firebase-Hosted Backend (using Firebase Functions)

---

## 📁 Project Structure

```

XM-BakeryHub/
├── config/                # DB and Firebase config files
├── controllers/           # Business logic
├── middleware/            # Auth, validators, error handlers
├── models/                # DB models (using Sequelize or raw SQL)
├── routes/                # Route definitions
├── utils/                 # Helpers like report generation
├── functions/             # Firebase Functions entry
├── .env                   # Environment variables
├── app.js                 # Express entry point
└── firebase.json          # Firebase config

```
---

## 🧩 Technologies Used

- **Backend:** Node.js, Express
- **Database:** MySQL
- **Authentication:** JWT, Bcrypt
- **Input Validation:** express-validator
- **Deployment:** Firebase Functions
- **ORM (optional):** Sequelize

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/xm-bakeryhub.git
cd xm-bakeryhub
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=bakery_db

JWT_SECRET=your_jwt_secret
```

### 4. Set Up MySQL Database

Import or create your database and required tables. Sequelize migrations or raw SQL can be used depending on your setup.

### 5. Run the App Locally

```bash
nodemon app.js
```

---

## ☁️ Firebase Deployment

### 1. Initialize Firebase Functions

```bash
firebase init functions
```

### 2. Replace `functions/index.js` with:

```js
const functions = require("firebase-functions");
const app = require("../app");
exports.api = functions.https.onRequest(app);
```

### 3. Deploy

```bash
firebase deploy --only functions
```

---

## 📬 API Endpoints Summary

### 🔐 Authentication

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | /api/auth/signup | Register new user   |
| POST   | /api/auth/login  | Login and get token |

### 📦 Products

| Method | Endpoint             | Description                      |
| ------ | -------------------- | -------------------------------- |
| POST   | /api/products        | Add new product                  |
| GET    | /api/products        | List all products                |
| GET    | /api/products/\:id   | Get product by ID                |
| PUT    | /api/products/\:id   | Update product                   |
| DELETE | /api/products/\:id   | Delete product                   |
| GET    | /api/products/search | Search/filter by price, category |

### 🛒 Orders

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| POST   | /api/orders                 | Place new order              |
| GET    | /api/orders/\:customerId    | Get customer's order history |
| GET    | /api/orders/track/\:orderId | Track product delivery       |

### 📊 Reports

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| GET    | /api/reports/sales     | Generate sales report     |
| GET    | /api/reports/inventory | Generate inventory report |

---

## 🛡️ Middleware

* **JWT Authentication:** Protect routes from unauthorized access.
* **Input Validation:** Prevent bad data input using `express-validator`.
* **Error Handling:** Graceful error responses using centralized middleware.

---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests if you want to contribute or improve the system

```


```
