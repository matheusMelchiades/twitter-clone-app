import axios from 'axios';

const api = axios.create({
    baseURL: 'https://twitter-server-clone.herokuapp.com'
});

export default api;