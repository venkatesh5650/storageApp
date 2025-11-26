import mongoose from "mongoose";

// Schema for storing folder structure
const folderSchema = new mongoose.Schema(
  {
    name: String, // Folder name
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder", // Self-reference for nested folders
      default: null,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Folder owner
  },
  { timestamps: true } // Auto-manages createdAt and updatedAt
);

export default mongoose.model("Folder", folderSchema);
