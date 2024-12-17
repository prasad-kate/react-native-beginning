import axios from "axios";

export const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 2 * 60 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
