import { apiClient } from "./api-client";

 export async function AddProductToWishList({id}) {
    try {
        // Add product to wishlist logic here
        const options = {
            url: `/wishlist`,
            method:"POST",
            data:{
                productId : id
            }
        }
        const response = await apiClient.request(options);
          return response;

    } catch (error) {
        throw error;
    }
 }

 export async function GetWishListProducts() {
    try {
        const options = {
            url: `/wishlist`,
            method: "GET"
        }
        const response = await apiClient.request(options);
        return response;

    } catch (error) {
        throw error;
    }
 }


 export async function RemoveProductFromWishList({id}) {
    try {
        const options = {
            url: `/wishlist/${id}`,
            method: "DELETE"
        }
        const response = await apiClient.request(options);
        return response;

    } catch (error) {
        throw error;
    }
 } 