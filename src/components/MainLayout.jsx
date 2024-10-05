import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


const MainLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
