import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${import.meta.env.API_PORT || 3001}`,
  withCredentials: false
})

export const requestData = async (id) => {
  const response = await api.get(`/${id}`);
  return response;
};

export const requestQuery = async (key, value, page) => {

  const response = await api.get(`/?key=${key}&value=${value}&page=${page}`);
  return response;
}

export default api;