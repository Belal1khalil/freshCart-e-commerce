import { useQuery } from "@tanstack/react-query"
import { GetAllProducts } from "../services/Products-services"


export default function UseProdutcs() {
     const {isLoading , isError , error, data:products} = useQuery({
    queryKey:["products"],
    queryFn: GetAllProducts,
   select: (data) => data.data.data
   })
  return {
    isLoading , isError , error, products
  };
}
