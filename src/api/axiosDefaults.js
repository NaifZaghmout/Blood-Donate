import axios from "axios";

axios.defaults.baseURL =`${process.env.REACT_APP_BACKEND_URL}`;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = false;

export const axiosReq = axios.create();
export const axiosRes = axios.create();