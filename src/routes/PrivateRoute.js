import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {console.log(isLoggedIn)}, [])
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
