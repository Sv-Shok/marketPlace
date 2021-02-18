import { getRoot, types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    isLoggedIn: false,
    register: asyncModel(registerFlow),
  })
  .actions((store) => ({
    setIsLoggedIn(value) {
      store.isLoggedIn = value;
    },

    logout() {
      store.isLoggedIn = false;
      Api.Auth.logout();
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ password, email });

    console.log(res.data);

    Api.Auth.setToken(res.data.token);

    getRoot(flow).viewer.setViewer(res.data.user);
  };
}

function registerFlow({ email, password, fullName }) {
  return async (flow) => {
    const res = await Api.Auth.register({
      email,
      password,
      fullName,
    });

    console.log(res.data);

    Api.Auth.setToken(res.data.token);

    getRoot(flow).viewer.setViewer(res.data.user);
  };
}
