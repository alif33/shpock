import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { 
  attemptToLogin,
} from "../redux/settings/actions";

function UserRoute({ component: Component, ...rest }) {
  
  const { users } = useSelector( state => state)
  const dispatch = useDispatch()

  return (
    <Route
      {...rest}
      render={(props) =>
        users.isUser ? <Component {...props} /> : <Redirect to="/" render={ dispatch(attemptToLogin()) } />
      }
    />
  );
}

export default UserRoute;
