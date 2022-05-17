import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProctedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <h1>cargando</h1>;

  if (!userState) return <Navigate to="/initial" />;

  return <div>{children}</div>;
};
