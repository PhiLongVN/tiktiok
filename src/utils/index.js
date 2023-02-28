import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  timeout: 5000,
});

export const get = async (path, options = {}) => {
  const result = await request.get(path, options);

  return result.data;
};

export default request;
