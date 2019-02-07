import axios from 'axios';

const api = axios.create({
    baseURL: 'http://twitter-server-clone.herokuapp.com'
});

export default api;