import ShareLink from "../models/ShareLink.js";
import Folder from "../models/Folder.js";
import File from "../models/File.js";

// Fetch public resource (file or folder) using share link
export const getPublicResource = async (req, res) => {
  const { shareId } = req.params;

  // Validate active share link
  const link = await ShareLink.findOne({ shareId, isActive: true });
  if (!link) return res.status(404).json({ message: "Invalid link" });

  // Return shared file
  if (link.type === "file") {
    const file = await File.findById(link.file);
    return res.json(file);
  }

  // Return shared folder
  if (link.type === "folder") {
    const folder = await Folder.findById(link.folder);
    return res.json(folder);
  }
};
