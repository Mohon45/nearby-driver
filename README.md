# Nearby Car & Driver Matching System

## 🚀 Live Deployment

**Production URL:** https://nearby-driver-matching-system.vercel.app

**API Endpoint:** https://nearby-driver-matching-system.vercel.app/api/ride/request

---

## 🚀 Tech Stack

- Node.js
- Express
- PostgreSQL (Railway)
- Prisma ORM
- Deployed on Vercel

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

### Example cURL Request:

```bash
curl -X POST https://nearby-driver-matching-system.vercel.app/api/ride/request \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "pickup_lat": 23.8103,
    "pickup_lng": 90.4125,
    "radius_km": 5
  }'
```

---

## 📊 Features

- Haversine formula distance calculation
- Sorted by nearest driver
- Proper project structure
- Production deployment on Vercel
- PostgreSQL database on Railway

---

## 👨‍💻 Author

Md. Mohon
