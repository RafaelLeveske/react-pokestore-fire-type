import axios from 'axios';

const api = axios.create({
  baseURL: 'http://pokestore-api-v1.herokuapp.com',
});

export default api;
