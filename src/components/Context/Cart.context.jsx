import { createContext, useEffect, useState } from "react";
import { addProductToCart, getCartProducts, removeProductFromCart, UpdateProductQuantity } from "../../services/Cart-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const CartContext = createContext(null);



export default function CartProvider({ children }) {
    const [cartInfo , setCartInfo] = useState(null);
    const [ isLoading , setIsLoading ] = useState(true);
    const[isError , setIsError] = useState(false);
    const [errorMessage , setErrorMessage] = useState(null);

    async function HandleAddingProductToCart({id}) {
        try {
            setIsLoading(true);
            const response = await addProductToCart({id});
            if(response.success) {
                setIsLoading(false);
                toast.success(response.data.message);
                setCartInfo(response.data);
            }
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(error.message);
        }
    }

    async function HandleFetchingCartProducts() {
        try {
            setIsLoading(true);
            const response = await getCartProducts();
            if(response.success) {
               
                setCartInfo(response.data);
                setIsLoading(false)
            }
            
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(error);
        }
    }

    async function HandleRemoveProduct({_id}) {
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
             const response = await removeProductFromCart({_id})
              if(response.success) {
              setCartInfo(response.data)
             }
           
            }
      } catch (error) {
         console.log(error)
      }
    } 

  async function HandleUpdateProductQuantity({_id , count}) {
     try {
        const toastId = toast.loading("Updating Product Quantity")
        const response = await UpdateProductQuantity({_id , count})
         if(response.success) {
            toast.dismiss(toastId)
            setCartInfo(response.data)
         }
     } catch (error) {
         console.log(error)
     }
   }

  function clearAll() {
    setCartInfo([])
  }



   

    return <CartContext.Provider value={{ clearAll, cartInfo , setCartInfo ,  isLoading , isError , errorMessage , HandleAddingProductToCart , HandleFetchingCartProducts , HandleRemoveProduct , HandleUpdateProductQuantity}}>
          {children}
    </CartContext.Provider>
}