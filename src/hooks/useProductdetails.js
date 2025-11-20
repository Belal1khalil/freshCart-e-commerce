import { useQuery } from '@tanstack/react-query'
import { GetProductById } from '../services/Products-services'

export  function useProductdetails(id) {
   const{error , isError , isLoading ,data:productDetails} = useQuery({
    queryKey: ['productdetails' , id],
     queryFn:() => GetProductById({id}),
     select :(data)=> data.data.data
    })
  return {
    error,
    isError,
    isLoading,
    productDetails
  }
}
