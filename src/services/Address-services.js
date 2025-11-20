import { apiClient } from "./api-client"

 export async function addAddress(values) {
  try {
    const options= {
      url:"/addresses",
      method:"POST",
      data:values,
    }
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw(error)
  }
}




 export async function getAddress() {
  try {
    const options= {
      url:`/addresses`,
      method:"GET",
   
    }
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw(error)
  }
}

 export async function deleteAddress(id) {
  try {
    const options= {
      url:`/addresses/${id}`,
      method:"DELETE",
   
    }
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw(error)
  }
}