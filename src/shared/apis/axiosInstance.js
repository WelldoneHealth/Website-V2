import axios from "axios";
import Cookies from "js-cookie";
import { baseURL } from "./utils/constants";

const axiosInstance = axios.create({
  baseURL: baseURL, // Set the base URL from environment
});

// Add a request interceptor to include the token in headers if it exists
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken"); // Replace "authToken" with your token cookie name
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
