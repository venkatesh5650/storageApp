import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";

interface Folder {
  _id: string;
  name: string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  // State for root folders and UI status
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newFolderName, setNewFolderName] = useState("");

  // Fetch all root folders
  const fetchFolders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get<Folder[]>("/folders/root");
      setFolders(res.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load folders");
    } finally {
      setLoading(false);
    }
  };

  // Load folders on initial render
  useEffect(() => {
    fetchFolders();
  }, []);

  // Create a new root folder
  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) return;
    try {
      await api.post("/folders", { name: newFolderName });
      setNewFolderName("");
      fetchFolders();
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to create folder");
    }
  };

  // Delete a root folder with confirmation
  const handleDeleteFolder = async (folderId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this root folder and all its contents?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/folders/${folderId}`);
      alert("Root folder deleted successfully");
      fetchFolders();
    } catch (err) {
      alert("Failed to delete folder");
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h2>Dashboard / Root Folders</h2>
      <p className="badge">Find All Folders View</p>

      <div style={{ margin: "1rem 0" }}>
        <input
          className="input"
          placeholder="New root folder name"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <button className="button" onClick={handleCreateFolder}>
          Create Folder
        </button>
      </div>

      {loading && <p>Loading folders...</p>}
      {error && <p style={{ color: "#f97373" }}>{error}</p>}

      {!loading && folders.length === 0 && <p>No folders yet.</p>}

      <ul className="list">
        {folders.map((folder) => (
          <li key={folder._id} className="list-item">
            <div>
              <strong>{folder.name}</strong>
              <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                Created: {new Date(folder.createdAt).toLocaleString()}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Link className="link" to={`/folders/${folder._id}`}>
                Open
              </Link>

              {/* Delete root folder */}
              <button
                className="button danger"
                onClick={() => handleDeleteFolder(folder._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
