import React from "react";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home/Home";

const MyRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Navigate to="home" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MyRoutes;
