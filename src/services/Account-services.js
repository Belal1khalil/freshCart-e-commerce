import { apiClient } from "./api-client"

 export async function getUserInfo(id) {
    try {
        const options = {
            method:"GET",
            url:`/users/${id}`,
        }
        const response = await apiClient.request(options)
        return response;
    } catch (error) {
        throw(error)
    }
 }