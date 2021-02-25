import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute, routes } from '../routes';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Auth = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path={routes.register} component={Register} />
        <PrivateRoute path={routes.login} component={Login} />
      </Switch>
    </>
  );
};

export default Auth;
