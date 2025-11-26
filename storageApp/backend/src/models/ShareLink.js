import mongoose from "mongoose";

// Schema for managing public share links
const shareLinkSchema = new mongoose.Schema({
  shareId: String, // Unique public share ID
  type: String, // Resource type: "file" or "folder"
  folder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" }, // Shared folder reference
  file: { type: mongoose.Schema.Types.ObjectId, ref: "File" }, // Shared file reference
  isActive: { type: Boolean, default: true } // Controls link validity
});

export default mongoose.model("ShareLink", shareLinkSchema);
