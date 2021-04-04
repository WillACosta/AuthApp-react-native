import axios from "axios";

const APIKit = axios.create({
  baseURL: "http://10.0.2.2:8000/auth/",
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token: string) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;
