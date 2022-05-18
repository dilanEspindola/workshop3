import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

export const ProctedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <Loader />;

  if (!userState) return <Navigate to="/initial" />;

  return <div>{children}</div>;
};
