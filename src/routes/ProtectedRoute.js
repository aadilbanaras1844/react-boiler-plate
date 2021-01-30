
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const checkAuth = () => {
  return {};
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;