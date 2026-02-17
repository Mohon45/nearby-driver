# Nearby Car & Driver Matching System

## 🚀 Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM

---

## 📦 Setup Instructions

1. Install dependencies:
   npm install

2. Setup environment:
   Update DATABASE_URL inside .env

3. Generate Prisma Client:
   npx prisma generate

4. Run migration:
   npx prisma migrate dev --name init

5. Start server:
   npm run dev

---

## 📡 API Endpoint

POST /api/ride/request

### Request Body:

{
"user_id": 1,
"pickup_lat": 23.8103,
"pickup_lng": 90.4125,
"radius_km": 5
}

---

## 📊 Features

- Haversine formula distance calculation
- Sorted by nearest driver
- Proper project structure
- Ready for GitHub submission

---

## 👨‍💻 Author

Md. Mohon
