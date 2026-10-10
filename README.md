# 🛒 ByteBazaar – PERN Stack E-Commerce App

🚀 **Live Demo:** https://bytebazaar-pern.onrender.com/

---

## 📌 Overview

**ByteBazaar** is a full-stack e-commerce-style web application built using the **PERN Stack (PostgreSQL, Express, React, Node.js)**.
It allows users to manage products with a modern UI, real-time updates, and production-ready backend security.

---

## 🎥 Demo

https://github.com/user-attachments/assets/eec04bdf-870e-4c77-bccd-415781835602

---

## ✨ Features

* 🛍️ Add, view, and manage products
* ⚡ Fast and responsive UI with React + Vite
* 🎨 Dynamic theme switching using DaisyUI
* 🔄 Real-time state management with Zustand
* 🔐 API protection with Arcjet (rate limiting + bot detection)
* 🗄️ PostgreSQL database (Neon)
* 🌐 Fully deployed on Render
* 📡 RESTful API architecture
* 📱 Mobile responsive design

---

## 🧠 Tech Stack

### 🖥️ Frontend

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🧠 Zustand (state management)
* 🔗 Axios
* 🔔 React Hot Toast
* 🎯 Lucide Icons

---

### ⚙️ Backend

* 🟢 Node.js
* 🚂 Express.js
* 🛡️ Arcjet (Rate Limiting & Bot Protection)
* 🔒 Helmet (Security)
* 📊 Morgan (Logging)
* 🌍 CORS

---

### 🗄️ Database

* 🐘 PostgreSQL
* ☁️ Neon Database (Serverless PostgreSQL)

---

### 🚀 Deployment

* 🌐 Render (Full-stack deployment)

---

## 🚀 Getting Started

### 1️⃣ Clone repo

```
git clone https://github.com/sachinyaduvanshi0002/bytebazaar-pern.git
cd bytebazaar-pern
```

### 2️⃣ Install dependencies

```
npm install
npm install --prefix frontend
```

### 3️⃣ Run project

```
npm run dev
```

For local setup, copy `.env.example` to `.env` and configure the PostgreSQL/Neon, Arcjet, and admin variables. Keep `ARCJET_ENV=development` locally so Arcjet uses its documented local request handling; use `ARCJET_ENV=production` in production. Generate `ADMIN_PASSWORD_HASH` with:

```
node -e "console.log(require('bcryptjs').hashSync('replace-me', 12))"
```

Set a long random `JWT_SECRET`; never expose it to the frontend. Product browsing and the About page are public, while product creation, editing, and deletion require an admin JWT obtained through `POST /api/auth/login`. Optional footer contact links can be configured with `VITE_LINKEDIN_URL` and `VITE_CONTACT_EMAIL` in `frontend/.env`. The API runs on port 3000 and Vite runs on port 5173.

For production, run `npm run build` and then `npm start`. Express serves `frontend/dist` without intercepting `/api/*` routes or static JavaScript assets.

### Render production environment

For the current single-service Render deployment (`https://bytebazaar-pern.onrender.com/`),
the frontend uses same-origin `/api` requests in the production build, so no frontend API
URL is required. Configure these backend environment variables in the Render service
dashboard, then redeploy:

* `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`, `PGDATABASE`
* `ARCJET_KEY`
* `NODE_ENV=production`
* `ADMIN_USERNAME`
* `ADMIN_PASSWORD_HASH` (a bcrypt hash, never the plaintext password)
* `JWT_SECRET`
* `JWT_EXPIRES_IN` (optional; defaults to `1h`)

Do not put any of these backend values in `frontend/.env` or variables prefixed with
`VITE_`. Vite exposes `VITE_*` values to the browser. Generate the password hash locally
with the command above, paste only the resulting hash into Render, and redeploy after
changing environment variables.

---

## 🙌 Author

👨‍💻 **Sachin Kumar**
📍 Full Stack Developer (PERN)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
