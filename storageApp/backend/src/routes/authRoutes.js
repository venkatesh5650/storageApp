import express from "express";
import { login, seedAdmin } from "../controllers/authController.js";

const router = express.Router();

// User login route
router.post("/login", login);

// One-time admin seeding route
router.post("/seed-admin", seedAdmin);

export default router;
