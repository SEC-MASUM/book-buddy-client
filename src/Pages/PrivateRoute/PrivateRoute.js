import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  let location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast(error.message);
    console.log(error.message);
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
