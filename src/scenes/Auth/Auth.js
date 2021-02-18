import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Auth = () => {
  return (
    <>
      <Switch>
        <Route path={routes.register} component={Register} />
        <Route path={routes.login} component={Login} />
      </Switch>
    </>
  );
};

export default Auth;
