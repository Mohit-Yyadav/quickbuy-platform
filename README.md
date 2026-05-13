# 🛒 QuickBuy - Full Stack MERN E-Commerce Platform

QuickBuy is a modern and responsive full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

The platform provides secure authentication, product management, online payments, admin dashboard, order tracking, and a seamless shopping experience.

---

# 🚀 Features

## 👤 User Features
- User Registration & Login
- JWT Authentication
- Profile Management
- Add to Cart
- Checkout System
- Razorpay Payment Integration
- Order History
- Responsive UI Design

## 🛠 Admin Features
- Admin Dashboard
- Add / Edit / Delete Products
- Product Image Upload
- Order Management
- User Management
- Inventory Management

## 💳 Payment Features
- Razorpay Payment Gateway
- Secure Payment Verification
- Test Mode Support

---

# 🧰 Tech Stack

## Frontend
- React.js
- Redux Toolkit
- React Router DOM
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Other Integrations
- Cloudinary
- Razorpay
- JWT Authentication

---

# 📁 Project Structure

```bash
QuickBuy/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Mohit-Yyadav/quickbuy-platform.git
```

---

## 2️⃣ Install Dependencies

```bash
npm run install-all
```

OR

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

---

# 🔑 Environment Variables

Create `.env` file inside `backend/`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

NODE_ENV=development
```

---

# 🌱 Seed Database

```bash
npm run seed
```

## Admin Login

```txt
Email: admin@quickbuy.com
Password: password123
```

---

# ▶️ Run Application

```bash
npm run dev
```

## Frontend

```txt
http://localhost:3000
```

## Backend

```txt
http://localhost:5000
```

---

# ☁️ Deploy on Render

## Build Command

```bash
npm install && npm run build
```

## Start Command

```bash
npm start
```

---

# 📸 Screenshots

## Home Page
- Product Listing
- Categories
- Responsive Design

## Admin Dashboard
- Manage Products
- Orders
- Analytics

## Checkout
- Razorpay Integration
- Secure Payments

---

# 🔒 Authentication

- JWT Based Authentication
- Protected Routes
- Admin Authorization
- Secure Password Hashing

---

# 💳 Razorpay Test Payment

Use Razorpay Test Mode Credentials:

```txt
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Any Future Date
```

---

# 🛠 Available Scripts

```bash
npm run dev
npm run seed
npm start
npm run build
```

---

# 👨‍💻 Developer

## Mohit Yadav

### MERN Stack Developer

GitHub:
https://github.com/Mohit-Yyadav

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

```
