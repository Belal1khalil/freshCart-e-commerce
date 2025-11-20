

import axios from "axios";
import { API_CONFIG } from "../config";


 export const apiClient = axios.create({
   baseURL: API_CONFIG.baseURL,
 });
 
 apiClient.interceptors.request.use((config)=>{
  const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
 
  if (token) {
    
    config.headers.token = token;
  } 
  return config;
 })


apiClient.interceptors.response.use((response)=>{
    return Promise.resolve({
        success:true,
        data:response.data
    })
},
(error)=>{
    return Promise.reject({
        success: false,
        error:error,
        message:error.response.data.message
    })
})




