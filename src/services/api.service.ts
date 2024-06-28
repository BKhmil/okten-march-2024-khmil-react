import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export {
    apiService
}