import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

// Load environment variables and connect to database
dotenv.config();
connectDB();

const app = express();

// Global middlewares
app.use(
  cors({
    origin: "https://storage-app-ashen.vercel.app", // your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.use(express.json());

// Health check route
app.get("/", (req, res) => res.send("Storage Platform Backend ✅"));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/public", publicRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
