// import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
// import { faCartShopping, faMinus, faPlus, faShareNodes, faTrash, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, { useState } from 'react'
// import Rating from '../Rating/Rating'
// import { calcDiscount } from '../../utils/discont-utils'
// import ReactImageGallery from 'react-image-gallery'
// import "react-image-gallery/styles/css/image-gallery.css";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { useContext } from 'react'
// import { CartContext } from '../Context/Cart.context'
// import PageMetaData from '../PageMetaData/PageMetaData'

// export default function ProductInfo( {productDetails}) {
   

//     const {id , _id  , title  , description , category , images , price , priceAfterDiscount , ratingsAverage , quantity , ratingsQuantity   } = productDetails;
   
//     const [AddedtoCart , setIsAddedtocart] = useState(false);
//       const {HandleAddingProductToCart , HandleRemoveProduct}=  useContext(CartContext)

//      function handleAddtocart() {
//         setIsAddedtocart(!AddedtoCart)
//      }

//   return (
//     <>
//     <PageMetaData title={`${title} - Fresh Cart`} description={description} />
//      <section id='product-detail' className='py-10'>
//         <div className="container mx-auto  px-4">
//          <div className='flex flex-col lg:flex-row gap-8'>
//             {/*images*/}
//               <div id='product_images' className="lg:w-96">
//                  <ReactImageGallery
//                  showFullscreenButton={false}
//                  showNav={false}
//                  showPlayButton={false}
//                  items={images.map((image)=>{
//                     return {
//                         original: image,
//                         thumbnail:image,
//                     }
//                  })}/>
//               </div>
             
//               {/*Product Info*/}
//                <div id='product-info' className="lg:w-3/5 ">
//                  <div className=' bg-white rounded-lg p-6'>
//                   <div className='flex justify-between mb-4'>
//                 <span className={`${quantity > 0 ? `bg-primary-100 text-primary-700 text-xs` : "bg-primary-100 text-red-500 text-xs"} px-2 py-1 rounded-md`}>
//                     {
//                        quantity > 0 ?  "In Stock" : "Out of Stock"
//                     }
                    
//                     </span>
//                 <div className='flex space-x-2'>
//                     <button className='text-gray-500 hover:text-primary-600'>
//                         <FontAwesomeIcon icon={faShareNodes}/>
//                     </button>
//                     <button className='text-gray-500 hover:text-primary-600'>
//                         <FontAwesomeIcon icon={faHeart}/>
//                     </button>

//                 </div>
//             </div>
//             <h1 className="text-2xl font-semibold mb-2 text-black">{title}</h1>
//             <div className="flex items-center text-yellow-500 mb-2">
//               <Rating rating={ratingsAverage}/>
//               <span className="text-gray-600 text-sm ml-2">
//                 {ratingsAverage} ({ratingsQuantity } reviews)
//                 </span>
//             </div>

//             <div className="flex items-center space-x-3 mb-4">
//               <span className="text-2xl font-bold text-green-600">
//                {priceAfterDiscount || price} EGB
//               </span>

//                {
//                 priceAfterDiscount ?
//                 <>
//                 <span className="line-through text-gray-400">{price} EGB</span> 
//                  <span className="text-red-700 text-sm ml-3 px-2 py-1 rouded bg-red-100">
//                     save {calcDiscount({price , priceAfterDiscount})} %
//                  </span>
//                 </>
//               :"" }

              
//             </div>

//             <p className="text-gray-700 mb-6">
//                {description}
//             </p>

          

//             {/* Quantity */}
//             <div className="flex items-center mb-4 ">
//              <div className='border py-2 px-3 rounded-md border-gray-300'>
//                <button>
//                   <FontAwesomeIcon icon={faMinus}/>
//               </button>
//               <span className="px-4">100</span>
//               <button>
//                 <FontAwesomeIcon icon={faPlus}/>
//               </button>
//              </div>
//               <span className="ml-3 text-sm text-gray-500">Only {quantity} left in stock</span>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col md:flex-row gap-3 mb-6">
//               <button onClick={handleAddtocart} className='w-full' >
//                 {AddedtoCart === false ? 
//                 <button onClick={()=>{HandleAddingProductToCart({id})}} className='btn w-full bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white'>
//                  <FontAwesomeIcon className='mx-1' icon={faCartShopping}/>
//                  Add To Cart
//                 </button>
//                 : <button className='btn w-full bg-red-500 text-white' onClick={()=>{
//                   HandleRemoveProduct({_id})
//                 }} >
                   
//                    <FontAwesomeIcon className='mx-1' icon={faTrash}/>
//                      Remove From Cart
                  
//                   </button>}
//               </button>
//               <button className="btn w-full  bg-transparent border-2 border-gray-400/30 hover:bg-primary-500 transition-colors duration-200 hover:text-white">
//                 Buy Now
//               </button>
//             </div>

//             {/* Info */}
//             <div className=" border-t-1  border-gray-300 py-8 flex flex-col lg:flex-row items-center justify-between gap-4 space-y-4 px-2 mx-auto text-gray-700">
//               <div className="flex items-center space-x-3">
//                 <FontAwesomeIcon className='bg-primary-200 size-7 rounded-full px-2 py-2 text-primary-600' icon={faTruck}/>
//                 <div className='flex  flex-col'>
//                   <span className='font-bold  text-black'>Free Delivery</span>
//                   <span className='text-sm text-gray-400'>Free Shipping on orders over 50$</span>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                  <FontAwesomeIcon className='bg-primary-200 size-7 rounded-full px-2 py-2 text-primary-600' icon={faUndo}/>
//                 <div className='flex  flex-col'>
//                   <span className='font-bold  text-black'>30 Days Return</span>
//                   <span className='text-sm text-gray-400' >Staisfaction guaranteed or money back</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//          </div>
//         </div>
//      </section>
//     </>
//   )
// }









import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMinus, faPlus, faShareNodes, faTrash, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Rating from '../Rating/Rating'
import { calcDiscount } from '../../utils/discont-utils'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from 'react'
import { CartContext } from '../Context/Cart.context'
import PageMetaData from '../PageMetaData/PageMetaData'

export default function ProductInfo({ productDetails }) {
    const { id, _id, title, description, category, images, price, priceAfterDiscount, ratingsAverage, quantity, ratingsQuantity } = productDetails;
   
    const [AddedtoCart, setIsAddedtocart] = useState(false);
    const { HandleAddingProductToCart, HandleRemoveProduct } = useContext(CartContext);

    function handleAddtocart() {
        setIsAddedtocart(!AddedtoCart);
    }

    return (
        <>
            <PageMetaData title={`${title} - Fresh Cart`} description={description} />
            <section id='product-detail' className='py-6 md:py-8 lg:py-10'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10'>
                        {/* Images */}
                        <div id='product_images' className="w-full lg:w-1/2 xl:w-2/5">
                            <ReactImageGallery
                                showFullscreenButton={false}
                                showNav={false}
                                showPlayButton={false}
                                showBullets={false}
                                thumbnailPosition="bottom"
                                items={images.map((image) => {
                                    return {
                                        original: image,
                                        thumbnail: image,
                                    }
                                })}
                            />
                        </div>
                        
                        {/* Product Info */}
                        <div id='product-info' className="w-full lg:w-1/2 xl:w-3/5">
                            <div className='bg-white rounded-lg p-4 sm:p-6 lg:p-8'>
                                {/* Stock Status & Actions */}
                                <div className='flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 mb-4'>
                                    <span className={`${quantity > 0 ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-600'} text-xs px-3 py-1.5 rounded-full font-medium`}>
                                        {quantity > 0 ? "In Stock" : "Out of Stock"}
                                    </span>
                                    <div className='flex space-x-3'>
                                        <button className='text-gray-500 hover:text-primary-600 transition-colors duration-200 p-2'>
                                            <FontAwesomeIcon icon={faShareNodes} className="text-sm" />
                                        </button>
                                        <button className='text-gray-500 hover:text-red-500 transition-colors duration-200 p-2'>
                                            <FontAwesomeIcon icon={faHeart} className="text-sm" />
                                        </button>
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-black">
                                    {title}
                                </h1>

                                {/* Rating */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                                    <div className="flex items-center text-yellow-500">
                                        <Rating rating={ratingsAverage} />
                                        <span className="text-gray-600 text-sm ml-2">
                                            {ratingsAverage} ({ratingsQuantity} reviews)
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                                    <span className="text-2xl sm:text-3xl font-bold text-green-600">
                                        {priceAfterDiscount || price} EGP
                                    </span>
                                    {priceAfterDiscount && (
                                        <>
                                            <span className="line-through text-gray-400 text-lg">
                                                {price} EGP
                                            </span>
                                            <span className="text-red-700 text-xs sm:text-sm px-2 py-1 rounded bg-red-100">
                                                save {calcDiscount({ price, priceAfterDiscount })} %
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm sm:text-base mb-6">
                                    {description}
                                </p>

                                {/* Quantity */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                                    <div className='border py-2 px-3 rounded-md border-gray-300 w-fit'>
                                        <button>
                                            <FontAwesomeIcon icon={faMinus} className="text-sm" />
                                        </button>
                                        <span className="px-3 sm:px-4">1</span>
                                        <button>
                                            <FontAwesomeIcon icon={faPlus} className="text-sm" />
                                        </button>
                                    </div>
                                    <span className="text-sm text-gray-500 ml-0 sm:ml-3">
                                        Only {quantity} left in stock
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <button onClick={handleAddtocart} className='w-full'>
                                        {AddedtoCart === false ? 
                                            <button onClick={() => { HandleAddingProductToCart({ id }) }} className='btn w-full bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white py-3 text-sm sm:text-base'>
                                                <FontAwesomeIcon className='mx-1' icon={faCartShopping} />
                                                Add To Cart
                                            </button>
                                            : 
                                            <button className='btn w-full bg-red-500 text-white py-3 text-sm sm:text-base' onClick={() => { HandleRemoveProduct({ _id }) }}>
                                                <FontAwesomeIcon className='mx-1' icon={faTrash} />
                                                Remove From Cart
                                            </button>
                                        }
                                    </button>
                                    <button className="btn w-full bg-transparent border-2 border-gray-400/30 hover:bg-primary-500 transition-colors duration-200 hover:text-white py-3 text-sm sm:text-base">
                                        Buy Now
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="border-t border-gray-300 pt-6 md:pt-8">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-gray-700">
                                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                                            <FontAwesomeIcon className='bg-primary-200 size-7 rounded-full p-2 text-primary-600 flex-shrink-0' icon={faTruck} />
                                            <div className='flex flex-col'>
                                                <span className='font-bold text-black text-sm sm:text-base'>Free Delivery</span>
                                                <span className='text-xs sm:text-sm text-gray-400'>Free Shipping on orders over 50$</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                                            <FontAwesomeIcon className='bg-primary-200 size-7 rounded-full p-2 text-primary-600 flex-shrink-0' icon={faUndo} />
                                            <div className='flex flex-col'>
                                                <span className='font-bold text-black text-sm sm:text-base'>30 Days Return</span>
                                                <span className='text-xs sm:text-sm text-gray-400'>Satisfaction guaranteed or money back</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





