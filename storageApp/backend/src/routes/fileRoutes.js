import express from "express";
import {
  createFile,
  renameFile,
  deleteFile,
  generateFileShareLink
} from "../controllers/fileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all file routes with authentication
router.use(protect);

// Create a new file
router.post("/", createFile);

// Rename an existing file
router.patch("/:id", renameFile);

// Delete a file
router.delete("/:id", deleteFile);

// Generate public share link for a file
router.post("/:id/share", generateFileShareLink);

export default router;
