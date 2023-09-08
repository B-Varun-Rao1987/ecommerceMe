import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null; // You might want to display a loading spinner here
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;


  // let user1={
  //   name:"B. Varun Rao",
  //   email:"itsvarunrao888@gmail.com",
  //   password:"Varun@123",
  //   role:"admin",
  //   image:"https://i.ibb.co/4KWHnsL/varun.png"
  // }