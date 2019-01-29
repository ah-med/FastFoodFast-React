import axios from 'axios';
import { baseUrl } from '../actions/constants';


const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${window.localStorage.getItem('userToken')}`
  },
});


request.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (route) => {
  try {
    const response = await request.get(route);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await request.post(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await request.put(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await request.delete(route, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

