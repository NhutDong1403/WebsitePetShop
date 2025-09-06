// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (user === undefined) return null; // hoặc loading spinner

  return user ? children : <Navigate to="/dang-nhap" />;
};

export default ProtectedRoute;
