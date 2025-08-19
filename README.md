# Appointment Booking App

A simple full-stack appointment booking app for a small clinic with patient and admin views.

---

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** SQLite (in-memory/demo)
- **Auth:** JWT-based
- **Deployment:** (Fill with your choice, e.g., Vercel + Render)

---

## Features

### Patient
- Register & login
- View available slots (next 7 days)
- Book a slot (prevents double booking)
- View my bookings

### Admin
- Login as admin
- View all bookings

---

## Install Dependencies

Open terminal in your project folder (`E:\PROJECTS\appointment-app`) and run:

### Install backend dependencies
npm install express sqlite3 cors jsonwebtoken bcryptjs


### Install frontend dependencies
npm install react react-dom
npm install -D vite concurrently


### Tailwind CSS setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

---

## Run Locally

1. Clone the repo:

git clone https://github.com/AnuragDeepSinha/appointment-booking-app.git
cd appointment-app
Install dependencies:


npm install
Start backend:


node backend.js
Start frontend:


## Postman / cURL Quick Test

# Register new user
curl -X POST http://localhost:4000/api/register -H "Content-Type: application/json" -d '{"name":"Test","email":"patient@example.com","password":"Passw0rd!"}'

# Login
curl -X POST http://localhost:4000/api/login -H "Content-Type: application/json" -d '{"email":"patient@example.com","password":"Passw0rd!"}'

# Get slots
curl http://localhost:4000/api/slots

# Book a slot
curl -X POST http://localhost:4000/api/book -H "Content-Type: application/json" -d '{"slotId":1,"user":"patient@example.com"}'

# Get my bookings
curl http://localhost:4000/api/my-bookings

Edit
npm run dev
Open browser at http://localhost:5173 (or the port Vite shows)
