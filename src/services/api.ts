import axios from 'axios';

const api = axios.create({
    baseURL: 'http://26.97.181.144:3333'
});

export default api;