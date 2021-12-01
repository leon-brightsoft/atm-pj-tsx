import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/home/Home";
import { useSelector, useDispatch } from "react-redux";
import { SET_AUTH } from "../constants/actionTypes";
import { accessToken } from "../services/token.sevice";

const RootRoute: React.FC = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const storedAuthentication = localStorage.getItem("@auth/token")

  useEffect(() => {
    if(storedAuthentication){
      const jsonData =  JSON.parse(storedAuthentication)
      dispatch({
        type: SET_AUTH,
        payload: jsonData
      })
      accessToken(jsonData?.token)
    }
  }, [storedAuthentication])

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
};

export default RootRoute;
