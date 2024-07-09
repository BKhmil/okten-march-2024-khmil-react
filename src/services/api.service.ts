import axios from "axios";
import {API_BASE_URL} from "../constants/urls";

export const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {}
});