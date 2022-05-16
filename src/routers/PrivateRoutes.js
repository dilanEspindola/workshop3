import React from "react";
import User from "../pages/User";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
};

export default PrivateRoutes;
