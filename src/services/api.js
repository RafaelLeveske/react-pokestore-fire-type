import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokestore-api-v1.herokuapp.com',
});

export default api;
