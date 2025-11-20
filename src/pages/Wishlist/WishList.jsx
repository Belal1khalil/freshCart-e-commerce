import React, { useContext, useEffect } from 'react'
import WishlistItem from '../../components/WishListItem/WishlistItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { WishListContext } from '../../components/Context/WishList.context'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router'
import WishListSkeleton from '../../components/skeleton/WishListSkeleton'
import PageMetaData from '../../components/PageMetaData/PageMetaData'

export default function WishList() {
  const {handleGetWishListProducts , isLoading , wishListinfo} = useContext(WishListContext);
   const products = wishListinfo?.data || [];

      const {count} = wishListinfo || 0;


      

 
 
  useEffect(()=>{
    handleGetWishListProducts();
  }, [])
  
  if(isLoading) {
    return <WishListSkeleton/>
  }
   
  return <>
   <PageMetaData title="Wishlist - Fresh Cart" description="Manage your wishlist and add your favorite products to the cart."/>
    <section className='py-6'>
      <div className="container">
           <div className="flex-1 bg-white rounded-lg shadow-md ">
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-semibold text-black  ">My Wishlist</h2>
          <div className='flex justify-between items-center flex-wrap gap-4'>
            <p className="text-sm text-gray-500  "> {count || 0} items in your cart</p>
             {
              count > 0 ? <div className=' space-x-3'>
              <button className='btn bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white mt-2 '>
                <FontAwesomeIcon className='mx-1' icon={faTrash}/>
                Clear All</button>
                <button className='btn bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white mt-2 '>
                <FontAwesomeIcon className='mx-1' icon={faShoppingCart}/>
                Add All To Cart</button>
            </div>:""
             }
          </div>
        </div>
        <div className="mb-4 w-full bg-gray-500/20 h-0.5">

        </div>
         {
          products.length > 0 ? products.map((item)=>(
            <WishlistItem key={item.id} productInfo={item}/>
          )): <div className='text-center py-5 space-y-4'>
              <p className='text-xl font-semibold text-black'>Your Wishlist is empty</p>
              <span>You Can Add products from <Link to={"/"} className='text-primary-500 hover:underline'>Here </Link></span>
          </div>
         }
        
        
      </div>
      </div>
    </section>
   
  </>

  
}
