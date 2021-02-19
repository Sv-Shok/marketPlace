import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Header from '../components/Header/Header';
import { useStore } from '../stores/createStore';

export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register',
  restore: '/auth/restore',
};

export const PrivateRoute = observer(
  ({ component: Component, ...props }) => {
    const store = useStore();
    return (
      <Route
        {...props}
        render={(...renderProps) =>
          store.auth.isLoggedIn ? (
            <Redirect to={routes.home} />
          ) : (
            <Component {...renderProps} />
          )
        }
      />
    );
  },
);

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <PrivateRoute path={routes.auth} component={Auth} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
