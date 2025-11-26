import express from "express";
import {
  getRootFolders,
  getFolderContents,
  createFolder,
  renameFolder,
  deleteFolder,
  generateFolderShareLink,
  revokeShareLink,
} from "../controllers/folderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all folder routes with authentication
router.use(protect);

// Get all root folders
router.get("/root", getRootFolders);

// Get sub-folders and files of a folder
router.get("/:id", getFolderContents);

// Create a new folder (root or sub-folder)
router.post("/", createFolder);

// Rename a folder
router.patch("/:id", renameFolder);

// Delete a folder
router.delete("/:id", deleteFolder);

// Generate public share link for a folder
router.post("/:id/share", generateFolderShareLink);

// Revoke an existing share link
router.patch("/share/:shareId/revoke", revokeShareLink);

export default router;
