import axios from "axios";

// Base url : https://api.github.com/users/joapedu

const api = axios.create({
  baseURL: "https://api.github.com/users/joapedu",
});

export default api;