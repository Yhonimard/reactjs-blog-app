import axios from "axios";

const instance = axios.create({
  //   eslint-disable-next-line no-undef
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export default instance;
