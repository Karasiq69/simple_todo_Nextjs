import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});