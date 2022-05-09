import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth0();
  console.log(user);
  if (!user?.email_verified) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
