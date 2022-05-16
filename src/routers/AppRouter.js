import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// private routes
import User from "../pages/User";
import Home from "../pages/Home";
// import PrivateRoutes from "./PrivateRoutes";
import { ProctedRoutes } from "../components/ProctedRoutes";
// public routes
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* private routes */}
        <Route
          path="/"
          element={
            <ProctedRoutes>
              <Home />
            </ProctedRoutes>
          }
        />
        <Route
          path="/user"
          element={
            <ProctedRoutes>
              <User />
            </ProctedRoutes>
          }
        />
        {/*  public routes */}
        <Route path="*" element={<PublicRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
