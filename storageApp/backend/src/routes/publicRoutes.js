import express from "express";
import { getPublicResource } from "../controllers/publicController.js";

const router = express.Router();

// Public route to access shared file or folder using shareId
router.get("/:shareId", getPublicResource);

export default router;
