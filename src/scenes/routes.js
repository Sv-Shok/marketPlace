import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Header from '../components/Header/Header';
import { useStore } from '../stores/createStore';
import ProductView from './ProductView/ProductView';
import ProductAdd from './ProductAdd/ProductAdd';

export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register',
  restore: '/auth/restore',
  product: '/products/:productId',
  productAdd: '/product/add',
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
          <Route path={routes.product} component={ProductView} />
          <PrivateRoute path={routes.auth} component={Auth} />
          <Route path={routes.productAdd} component={ProductAdd} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default Router;
