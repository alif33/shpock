import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AdminRoute;