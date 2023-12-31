import axios from "axios";

axios.defaults.baseURL = "https://stockholm-blood-donate-organization.onrender.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = false;

export const axiosReq = axios.create();
export const axiosRes = axios.create();