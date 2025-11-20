import { createContext, useEffect, useState } from "react";
import { AddProductToWishList, GetWishListProducts, RemoveProductFromWishList } from "../../services/WishList-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const WishListContext = createContext(null);


 export default function WishListProvider({ children }){
  
    const [wishListinfo, setWishListInfo] = useState(null);
   const [ isLoading , setIsLoading ] = useState(true);
    const[isError , setIsError] = useState(false);
    const [errorMessage , setErrorMessage] = useState(null);

   async function handleAddToWishList({id}) {
      try {
        setIsLoading(true);
        const response = await AddProductToWishList({id});
        if(response.success) {
            toast.success(response.data.message);
            setWishListInfo(response.data);
            setIsLoading(false);

        }
  
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error)
      }
   }

   async function handleGetWishListProducts() {
        // To be implemented
        try {
            setIsLoading(true);
         const response = await GetWishListProducts();    
            if(response.success)  {
                setWishListInfo(response.data);
                setIsLoading(false);

            }

        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(error);
          
        }
   }
   
  async  function handleRemoveFromWishList({id}) {
     try {
        const result = await Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                    });
          if(result.isConfirmed) {
              const response = await RemoveProductFromWishList({id});
                if(response.success) {
                    handleGetWishListProducts();
                    setWishListInfo(response.data);
                }
          }
         


     } catch (error) {
        console.log(error);
     }
   }

    return <WishListContext.Provider value={{handleAddToWishList , wishListinfo , isLoading , isError , errorMessage , handleGetWishListProducts , handleRemoveFromWishList}}>
      {children}
    </WishListContext.Provider>
}