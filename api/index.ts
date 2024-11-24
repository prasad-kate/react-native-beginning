import axios from "axios";

export const BASE_URL = "http://localhost:8000"; // temporary backend url

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
