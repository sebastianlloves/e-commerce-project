import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://mock-api-chi-six.vercel.app",
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("token")}`
  //   }
});