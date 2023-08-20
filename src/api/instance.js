import axios from "axios";

const instance = axios.create({
  //   eslint-disable-next-line no-undef
  baseURL: process.env.DB_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {});

export default instance;
