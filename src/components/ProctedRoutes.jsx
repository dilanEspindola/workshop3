<<<<<<< HEAD
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
=======
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
>>>>>>> f3d055c81b9ba13866e61521816bb1f6ce34438b

export const ProctedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <Loader />;

  if (!userState) return <Navigate to='/initial' />;

  return <div>{children}</div>;
};
