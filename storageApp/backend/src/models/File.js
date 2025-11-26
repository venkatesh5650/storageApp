import mongoose from "mongoose";

// Schema for storing file metadata
const fileSchema = new mongoose.Schema({
  name: String, // File name
  folder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" }, // Parent folder reference
  url: String, // File access URL
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Owner of the file
});

export default mongoose.model("File", fileSchema);
