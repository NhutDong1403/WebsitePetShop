import axios from "axios";
import { getAccessToken } from "./TokenService";

const API = axios.create({
  baseURL: "/api", // proxy tự redirect về backend
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
