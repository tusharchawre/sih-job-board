import { useQuery } from "@tanstack/react-query";
import axios from "axios";  

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getJobs = async () => {
  const response = await axiosInstance.get("/api/jobs");
  return response.data;
};


export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
};