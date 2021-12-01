import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/home/Home";
import AuthRequired from "./AuthRequired";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";

const RootRoute: React.FC = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const location = useLocation();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <AuthRequired>
            <Home />
          </AuthRequired>
        }
      />
    </Routes>
  );
};

export default RootRoute;
