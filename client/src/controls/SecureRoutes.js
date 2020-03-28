import jwtDecode from "jwt-decode";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.usertoken;
  try {
    const decoded = jwtDecode(token);
    return decoded.firstName;
  } catch (err) {
    return null;
  }
};

const PrivateRoute = ({ component, ...props }) => {
  if (isAuthenticated()) {
    return <Route {...props} component={component} />;
  }
  return <Redirect to="/login" />;
};

export { PrivateRoute };
