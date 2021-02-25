import axios from 'axios';

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    localStorage.setItem('___token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  isLoggedIn() {
    return Boolean(this._token);
  },

  login({ email, password }) {
    return axios.post('/api/auth/login', {
      email,
      password,
    });
  },

  logout() {
    this._token = null;
    localStorage.removeItem('___token');
    axios.defaults.headers.common.Authorization = undefined;
  },

  register({ email, password, fullName }) {
    return axios.post('/api/auth/register', {
      email,
      password,
      fullName,
    });
  },
};

export const Account = {
  getUser() {
    return axios.get('/api/account');
  },
};

export const Products = {
  fetchLatest() {
    return axios.get('/api/products/latest');
  },
  getById(id) {
    return axios.get(`/api/products/${id}`);
  },
};

export const Users = {
  getById(id) {
    return axios.get(`/api/users/${id}`);
  },
};
