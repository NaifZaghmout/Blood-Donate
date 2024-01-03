import axios from "axios";

axios.defaults.baseURL = "https://8000-naifzaghmou-blooddonate-8h80369qfat.ws-us107.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();