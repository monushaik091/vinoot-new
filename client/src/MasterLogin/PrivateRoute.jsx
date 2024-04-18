
import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const PrivateRoute = () => {

  const username =  localStorage.getItem("username")
    return username ? <Outlet /> : <Navigate to="/" />;

};

export default PrivateRoute;