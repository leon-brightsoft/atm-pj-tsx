import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/home/Home";
import AuthRequired from "./AuthRequired";

const RootRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/home"/>}/>
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
