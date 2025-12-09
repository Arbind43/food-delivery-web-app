# food-delivery-web-app
Full-stack food delivery app using React, Node.js, MongoDB, Firebase, Stripe

Uploaded the complete source code for the Food Delivery Web App 2024 project.

Included:
- Full backend built with Node.js, Express.js, MongoDB (Mongoose)
- JWT authentication and user management
- REST APIs for restaurants, orders, users, and payments
- Stripe Payment Intent integration for secure checkout
- Firebase Realtime Database integration for live order status tracking
- Optimized MongoDB schemas and indexing
- Complete React frontend (Vite) with routing and components
- Login, Register, Cart, Checkout, Restaurant List, and Order Tracker pages
- Axios API integration and token-based authentication handling
- Firebase listener for real-time order updates
- Project setup with backend + frontend folder structure

This is the initial fully working version of the application.



# 🍽️ Food Delivery Web App 2024  
Full-stack food delivery platform built with **React.js, Node.js, Express.js, MongoDB, Firebase Realtime Database, and Stripe Payments**.

This app supports:
- User Authentication (JWT)
- Restaurant Listings & Menu
- Cart & Checkout Flow
- Stripe Payment Processing
- Real-Time Order Tracking (Firebase)
- RESTful APIs (Node + Express)
- Optimized MongoDB Schemas

---

## 🚀 Tech Stack

### **Frontend**
- React.js (Vite)
- React Router
- Axios
- Stripe.js + React-Stripe
- Firebase Realtime Database

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Stripe Payments
- Firebase Admin SDK
- JWT Authentication


---
# 🔧 Installation & Setup Instructions

Follow these steps carefully to run the project locally.

---

#1️⃣ Clone the Repository
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app

#2️⃣ Backend Setup
Step 1: Go to backend folder
cd backend

Step 2: Install dependencies
npm install

Step 3: Create .env file

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/food_delivery
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=sk_test_your_key
FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccountKey.json
FIREBASE_DB_URL=https://your-firebase-db.firebaseio.com
CLIENT_URL=http://localhost:5173


⚠️ Place your Firebase serviceAccountKey.json inside backend folder.

Step 4: Run the backend server
npm run dev


The backend should now run on:
📌 http://localhost:5000

#3️⃣ Frontend Setup
Step 1: Open the frontend folder
cd ../frontend

Step 2: Install dependencies
npm install

Step 3: Create .env file

Inside frontend/.env add:

VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_DB_URL=https://your-app.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-app

Step 4: Run frontend
npm run dev


Frontend will be live at:
📌 http://localhost:5173


