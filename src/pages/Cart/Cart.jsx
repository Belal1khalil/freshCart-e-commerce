
import { useContext, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";

import { CartContext } from "../../components/Context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { Link, Links } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartSkeleton from "../../components/skeleton/CartSkeleton";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Cart() {
 const {cartInfo , isLoading ,HandleFetchingCartProducts ,  } = useContext(CartContext);


  useEffect(()=>{
        HandleFetchingCartProducts();
    },[])
 if(isLoading) {
  return <CartSkeleton/>
 }

const {  numOfCartItems , data } = cartInfo || []  ;
 const {totalCartPrice , products} = data || [];




  return (
   <>
      <PageMetaData title="Cart - Fresh Cart" description="Review the items in your shopping cart and proceed to checkout."/>
      <section>
      <div className="container ">
         <div className=" p-6 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1 bg-white rounded-lg shadow-md ">
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-semibold  ">Shopping Cart</h2>
        <p className="text-sm text-gray-500  "> {numOfCartItems} items in your cart</p>
    
        </div>
        <div className="mb-4 w-full bg-gray-500/20 h-0.5">

        </div>

        {products?.length > 0 ? products.map((item) => (
          <CartItem key={item._id} productInfo={item} />
        )): <>
          <div className="text-center py-10 space-y-4">
            <p className="  ">
                 Your cart is empty {""}
                 <FontAwesomeIcon icon={faShoppingCart} className="ms-2"/>
              </p>
          <p>
            You Can Continue Shopping from <Link to={"/"} className="text-primary-500 hover:underline">here</Link>
          </p>
          </div>
         
        </>}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-80 bg-white rounded-lg shadow-md p-6 h-fit">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal ( {numOfCartItems} items)</span>
            <span>{totalCartPrice ?totalCartPrice :""} EGB</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">
              {numOfCartItems ? "70 EGB" : "0 EGB"}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
          </div>
        </div>

        <div className="border-t border-gray-500/20 my-3 pt-3 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{Math.trunc(totalCartPrice + (numOfCartItems ? 70 : 0) + (totalCartPrice * 0.14))} EGP</span>
        </div>

        <Link to={"/checkout"} className= {`${products?.length === 0 ? "btn w-full  text-center bg-gray-300 text-gray-500 opacity-50 pointer-events-none":"btn text-center bg-primary-600 text-white hover:bg-primary-700 hover:transition-colors duration-200 w-full "}`}> 
          Proceed to Checkout
        </Link>

        <Link to={"/"} className="btn text-center bg-transparent border-2 border-gray-400/50 w-full mt-2 hover:bg-gray-400/60">
          Continue Shopping
        </Link>
      </div>
    </div>
      </div>
     </section>
   </>
  
  );

}