import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://mock-api-git-main-sebastianlloves-projects.vercel.app/",
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("token")}`
  //   }
});