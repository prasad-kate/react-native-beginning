import { API_URL } from "@env";
import axios from "axios";

export const BASE_URL = API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
