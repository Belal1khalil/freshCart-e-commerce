import { apiClient } from "./api-client";

export async function GetAllProducts({
  page,
  keyword,
  brand,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category
} = {}) {
  try {
    const url = `/products?${
      page ? `page=${page}` : ""
    }${keyword ? `&keyword=${keyword}` : ""}${
      brand ? `&brand=${brand}` : ""
    }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
      priceLessThan ? `&price[lte]=${priceLessThan}` : ""
    }${sortedBy ? `&sort=${sortedBy}` : ""}${
      category ? `&category[in]=${category}` : ""
    }`;

    const options = {
      url,
      method: "GET",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

  export async function GetProductById({id}) {
   try {
        const options ={
      url:`/products/${id}`,
      method:"GET",
    }
    const response = await apiClient.request(options)
    // console.log(response)
    return response;
   } catch (error) {
    throw(error)
   }
 }