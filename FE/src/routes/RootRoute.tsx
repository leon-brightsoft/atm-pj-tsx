import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/home/Home";
import AuthRequired from "./AuthRequired";
import { useSelector } from "react-redux";
import { accessToken } from "../services/token.sevice";

const RootRoute: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  console.log(token)
  useEffect(() => {
    accessToken(token);
  }, [token]);

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
