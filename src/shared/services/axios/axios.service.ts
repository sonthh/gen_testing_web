import axios from 'axios';

axios.interceptors.request.use(config => {
  // const { token } = getCurrentUser();
  const token = 'token';
  config.headers['Authorization'] = `Bearer ${token}`;
  
  return config;
}, error => {
  console.log(error);
});

export default axios;
