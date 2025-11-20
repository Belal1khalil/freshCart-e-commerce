
import { getAllCategories } from '../services/category-service'
import { useQuery } from '@tanstack/react-query'

export default function useCategories() {
    const {isLoading , isError, error ,data:categories } = useQuery({
    queryKey:["categories"],
    queryFn: getAllCategories,
   select:(data)=> data.data.data
})
  return {
      isLoading , isError, error ,categories
  }
   
  
}
