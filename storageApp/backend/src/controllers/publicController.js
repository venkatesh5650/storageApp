import ShareLink from "../models/ShareLink.js";
import Folder from "../models/Folder.js";
import File from "../models/File.js";

export const getPublicResource = async (req, res) => {
  try {
    const { shareId } = req.params;

    const link = await ShareLink.findOne({ shareId, isActive: true });
    if (!link) {
      return res.status(404).json({ message: "Invalid or expired link" });
    }

    // ✅ PUBLIC FILE VIEW
    if (link.type === "file") {
      const file = await File.findById(link.file);
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }

      return res.json({
        type: "file",
        file
      });
    }

    // ✅ PUBLIC FOLDER VIEW
    if (link.type === "folder") {
      const folder = await Folder.findById(link.folder);
      if (!folder) {
        return res.status(404).json({ message: "Folder not found" });
      }

      const files = await File.find({ parentFolder: folder._id });
      const subFolders = await Folder.find({ parent: folder._id });

      return res.json({
        type: "folder",
        folder,
        files,
        subFolders
      });
    }

    res.status(400).json({ message: "Invalid share type" });
  } catch (error) {
    console.error("Public share error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
