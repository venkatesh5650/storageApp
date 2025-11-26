# 📦 Storage Platform — Full Stack Assignment

A simplified internal **Storage Platform (Drive-like System)** built using the **MERN Stack**.  
This application allows an **Admin** to manage folders & files and generate **public read-only share links**.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- CSS (Custom responsive UI)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## 👥 User Roles

### ✅ Admin (Authenticated)
- Login with email & password
- Create root folders
- Create sub-folders
- Upload files (metadata)
- Rename & delete folders/files
- Generate & revoke public share links

### ✅ Public User (Unauthenticated)
- Access shared files/folders using **public share URL**
- Read-only access
- No login required

---

## 📂 Features Implemented

### 🔐 Authentication
- JWT based login
- Secure protected routes
- Admin seeding supported

### 📁 Folder Management
- Create root folders
- Create nested sub-folders
- Rename folders
- Delete folders with cascading delete
- Navigate folder structure

### 📄 File Management
- Add file metadata with dummy URL
- Rename files
- Delete files

### 🔗 Public Share Links
- Generate unique public URLs
- Revoke shared links
- Public read-only view

### 📱 Responsive UI
- Fully responsive for:
  - Desktop
  - Tablet
  - Mobile

---

## 🔗 Live URLs

| Service | URL |
|--------|-----|
| Frontend | https://storage-app-ashen.vercel.app |
| Backend | https://storageapp-qkdb.onrender.com |

---

## 🔑 Default Admin Credentials

