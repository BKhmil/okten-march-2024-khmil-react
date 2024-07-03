import axios from "axios";

export const apiService = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});