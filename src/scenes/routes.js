import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Header from '../components/Header/Header';

export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register',
  restore: '/auth/restore',
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.auth} component={Auth} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
