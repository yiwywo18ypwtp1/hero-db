# 🦸 Hero DB

Fullstack CRUD application for managing superheroes.
Built with **Next.js (App Router)** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 🚀 Features

* 📋 View list of heroes with pagination
* 🔍 View detailed hero page
* ➕ Create new hero (with image upload)
* ✏️ Edit hero data via modal window
* 🗑 Delete hero
* 🖼 Upload multiple images per hero
* 🎨 Custom UI / layout (no UI libraries)

---

## 🧱 Tech Stack

### Frontend

* **Next.js 16 (App Router)**
* **React**
* **TypeScript**
* **Axios**
* **Tailwind CSS**

### Backend

* **Node.js**
* **Express**
* **MongoDB + Mongoose**
* **Multer** (file uploads)

---

## 📁 Project Structure

```
hero-db/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middlewares/
│   │   ├── app.js
│   │   └── server.js
│   ├── uploads/
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── api/
│   ├── types/
│   ├── utils/
│   └── package.json
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

### Frontend (`frontend/.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:5001
```

---

## 🛠 Installation & Run

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

Server will run on:

```
http://localhost:5001
```

---

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Heroes

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| GET    | /heroes     | Get heroes (pagination) |
| GET    | /heroes/:id | Get single hero         |
| POST   | /heroes     | Create hero (multipart) |
| PUT    | /heroes/:id | Update hero data        |
| DELETE | /heroes/:id | Delete hero             |

---

## 🖼 Image Handling

* Images are uploaded via **multipart/form-data**
* Stored on backend in `/uploads/heroes`
* Frontend displays images using full URL:

```
${NEXT_PUBLIC_API_URL}/uploads/...
```

## 🧑‍💻 Author

**Alexander Ivanitskiy**

Full-stack Developer

🔥 Passionate about clean UI, tech & glows, and high-quality code architecture.
