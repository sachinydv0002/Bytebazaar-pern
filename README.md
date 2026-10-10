# 🛒 ByteBazaar — Full-Stack E-Commerce Platform

A modern, responsive e-commerce web application built with the **PERN Stack (PostgreSQL, Express.js, React.js, and Node.js)**, featuring product management, dynamic themes, secure admin authentication, and production deployment.

<p align="center">

**🚀 Live Demo:** [ByteBazaar](https://bytebazaar-pern.onrender.com/)

</p>

---

## 🎥 Project Demo

Watch ByteBazaar in action:

[▶️ View Project Demo](https://github.com/user-attachments/assets/eec04bdf-870e-4c77-bccd-415781835602)

---

## ✨ Features

- 🛍️ **Product Management** — Browse, add, edit, and delete products with admin authorization.
- ⚛️ **Modern Frontend** — Responsive React interface powered by Vite.
- 🎨 **Dynamic Themes** — Theme switching with DaisyUI and Tailwind CSS.
- 🔄 **State Management** — Centralized client-side state using Zustand.
- 🔐 **Secure Authentication** — JWT-based admin authentication with protected product management routes.
- 🛡️ **API Security** — Request protection using Arcjet, security headers with Helmet, and request logging with Morgan.
- 🗄️ **PostgreSQL Database** — Persistent data storage using Neon Serverless PostgreSQL.
- 🌐 **RESTful API** — Structured backend endpoints built with Express.js.
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop.
- 🚀 **Production Deployment** — Full-stack deployment on Render.

---

## 🧰 Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| Tailwind CSS | Utility-first styling |
| DaisyUI | UI components and themes |
| Zustand | State management |
| Axios | HTTP requests |
| React Hot Toast | Notifications |
| Lucide React | Icons |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | API and server framework |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| Arcjet | Rate limiting and bot protection |
| Helmet | HTTP security headers |
| Morgan | HTTP request logging |
| CORS | Cross-origin request handling |

### Database & Deployment

- **Database:** PostgreSQL
- **Database Hosting:** Neon
- **Application Hosting:** Render
- **API Architecture:** REST
- **Authentication:** JWT-based admin access

---

## 🏗️ Architecture

<escape>
Browser (React + Vite)
        |
        | HTTP / Axios
        v
Express.js REST API
        |
        +---- JWT Authentication
        |
        +---- Arcjet / Helmet
        |
        v
Neon PostgreSQL
</escape>

In production, Express serves the built frontend from `frontend/dist` and handles `/api/*` requests through the backend routes.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL database or Neon account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/sachinyaduvanshi0002/bytebazaar-pern.git
cd bytebazaar-pern
```

### 2. Install dependencies

```bash
npm install
npm install --prefix frontend
```

### 3. Configure environment variables

Copy `.env.example` to `.env` in the project root and configure the required values according to the existing application setup.

Example backend configuration:

```env
NODE_ENV=development
PORT=3000

PGUSER=your_database_user
PGPASSWORD=your_database_password
PGHOST=your_database_host
PGPORT=5432
PGDATABASE=your_database_name

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD_HASH=your_bcrypt_password_hash

JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=1h
```

Use the actual variable names expected by the application. Keep all credentials private and never commit `.env` files.

Generate an admin password hash locally:

```bash
node -e "console.log(require('bcryptjs').hashSync('replace-me', 12))"
```

Replace `replace-me` with your intended password. Store the generated hash in `ADMIN_PASSWORD_HASH`, not the plaintext password.

### 4. Start the development environment

```bash
npm run dev
```

The default development configuration uses:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

Refer to the project's scripts and configuration if your local setup uses different ports or commands.

### 5. Build and run for production

```bash
npm run build
npm start
```

---

## ☁️ Render Deployment

ByteBazaar uses a single-service Render deployment:

**Live URL:** https://bytebazaar-pern.onrender.com/

Configure the required backend environment variables in the Render service dashboard:

- `PGUSER`
- `PGPASSWORD`
- `PGHOST`
- `PGPORT`
- `PGDATABASE`
- `ARCJET_KEY`
- `NODE_ENV=production`
- `ARCJET_ENV=production`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD_HASH`
- `JWT_SECRET`
- `JWT_EXPIRES_IN` (optional)

### Production Notes

- The production frontend uses same-origin `/api` requests, so a separate frontend API URL is not required for this deployment configuration.
- Express must serve the built frontend while preserving API routes and static asset paths.
- Keep database credentials, Arcjet keys, password hashes, and JWT secrets on the server.
- Never expose backend secrets through `VITE_*` variables.
- Redeploy the Render service after changing production environment variables.
- Verify database connectivity and authentication using the deployed environment.

---

## 🔐 Authentication & Authorization

- Product browsing and the About page are publicly accessible.
- Admin login is handled through `POST /api/auth/login`.
- Protected product-management endpoints require a valid admin JWT.
- Password verification uses a bcrypt hash.
- Authentication secrets must be configured through server-side environment variables.

---

## 👨‍💻 About the Developer

**Sachin Kumar**  
Computer Science and Engineering Student | Full-Stack Developer

I'm passionate about building modern, responsive web applications and exploring full-stack development. I enjoy working with React, JavaScript, Node.js, Express.js, and PostgreSQL to turn ideas into practical software solutions.

ByteBazaar is one of my projects focused on combining an intuitive shopping interface with backend APIs, database integration, and secure admin functionality.

---

## 📬 Connect

- **GitHub:** [sachinyaduvanshi0002](https://github.com/sachinyaduvanshi0002)
- **Live Project:** [ByteBazaar](https://bytebazaar-pern.onrender.com/)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub!

