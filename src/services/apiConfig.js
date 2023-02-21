import axios from "axios";

const ApiConfig = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://forall.sa/services/api/ads/companies?page_count=20",
});

export default ApiConfig;
