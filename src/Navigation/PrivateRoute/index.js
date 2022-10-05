import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const UserRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  console.log({ isLoggedIn });
  if (isLoggedIn) return children;
  return (
    <Navigate
      to={{
        pathname: "/",
        replace: true,
      }}
    />
  );
};
