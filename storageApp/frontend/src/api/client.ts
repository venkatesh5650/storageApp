import axios from "axios";

// Axios instance configured for backend API
const api = axios.create({
  baseURL: "https://storageapp-qkdb.onrender.com/api",
});

// Attach JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
