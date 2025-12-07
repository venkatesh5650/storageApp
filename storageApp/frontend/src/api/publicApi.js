import axios from "axios";

const publicApi = axios.create({
  baseURL: "https://storageapp-qkdb.onrender.com/api",
});

export default publicApi;
