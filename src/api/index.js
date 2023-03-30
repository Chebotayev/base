import axios from 'axios';

const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

api.interceptors.request.use((config) => {
  // console.log('config', config);
  config.headers.Authorization = 'Bearer 11111'

  return config
}, () => {

});


api.interceptors.response.use((response) => {
  console.log('config', response);
  

  return response.data;
}, () => {

});

export default api;