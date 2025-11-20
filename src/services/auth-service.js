
import { apiClient } from "./api-client";


 export async function sendDataToSiguUp(values){
   try {
      const options = {
      url : `/auth/signup`,
      method: "POST",
      data: values
     }
      const response = await apiClient.request(options)
      return response;

   } 
   catch (error) {
    throw(error)
   }
}


export async function sendDataToLogin(values) {
    try {
         const options = {
      url:`/auth/signin`,
      method:"POST",
      data:values,
    }
    const response = await apiClient.request(options);
    return response;
    } 
    catch (error) {
         throw(error)
    }
}


  export async function verfiyToken() {
   try {
      const options = {
         method:"GET",
         url: "/auth/verifyToken"
      }
      const response = await apiClient.request(options);
      return response;
   } catch (error) {
      throw(error)
   }
}


export async function changePassword(values) {
   try {
      const options = {
         method:"PUT",
         url: "/users/changeMyPassword",
         data: values
      }
      const response = await apiClient.request(options)
      return response
   } catch (error) {
      throw(error)
   }
}