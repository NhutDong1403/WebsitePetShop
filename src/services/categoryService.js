import axios from "axios";
import { getAccessToken } from "./TokenService";

const API = axios.create({
  baseURL: "https://localhost:7224/api/Categories",
  headers: { "Content-Type": "application/json" },
});

// Interceptor để tự động gắn token Admin
API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Lấy danh sách danh mục theo type và animalType
export const getCategories = async (type, animalType) => {
  const res = await API.get("", { params: { type, animalType } });
  return res.data;
};

// Thêm danh mục (Admin)
export const addCategory = async (category) => {
  const res = await API.post("", category);
  return res.data;
};

// Xóa danh mục (Admin)
export const deleteCategory = async (categoryId) => {
  return API.delete(`/${categoryId}`);
};
