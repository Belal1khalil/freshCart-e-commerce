import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import useCategories from "../../hooks/useCategories";
import HomeCategoriesSkeleton from './../skeleton/HomeCategoriesSkeleton';



export default function HomeCategories() {
   const {categories , isloading , iserror , error} =  useCategories();
    
  if(isloading) {
    return <HomeCategoriesSkeleton/>
  }

  return (
    <>
    <section>
        <div className="container">
        
         <div className="flex  justify-between items-center ">
            <h2 className="text-2xl  font-bold text-black">Shop by Category</h2>
            <Link 
            className="text-primary-600 hover:text-primary-700 transition-colors duration-300  flex justify-center items-center gap-2" 
             > 
             <span>View All Categories</span>
             <FontAwesomeIcon icon={faArrowRight} />
            </Link>
         </div>

         <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              { categories && categories.map((category)=> (
                 <Link 
                 to={`/categories/${category._id}`} 
                 key={category._id}
                 className="card p-4 flex flex-col items-center justify-center cursor-pointer rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <img 
                src= {category.image}
                className="size-16 rounded-full object-cover"
                alt="" />
                <h3 className="mt-3">{category.name} </h3>
            </Link>
              ))
              }
         </div>
        </div>
    </section>
    </>
  )
}
