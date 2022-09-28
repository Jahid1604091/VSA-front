import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';
import { url } from './constants';

// Create an instance of axios
const http = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});


http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default http;