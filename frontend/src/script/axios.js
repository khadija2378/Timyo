import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/",
    withCredentials: true ,
});

api.defaults.xsrfCookieName = 'XSRF-TOKEN';
api.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

export default api;