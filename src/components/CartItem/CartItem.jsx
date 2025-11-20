import { faL, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Rating from '../Rating/Rating'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/Cart.context';

export default function CartItem({productInfo}) {
    
    const {price , count , product ,  } = productInfo;
     const {HandleRemoveProduct , HandleUpdateProductQuantity} = useContext(CartContext)
     const {_id} = product;
     const [isUpdating , setIsUpdating] = useState(false);




     async function handleUpdate( {_id , count}) {
        setIsUpdating(true)
        await HandleUpdateProductQuantity({_id , count})
        setIsUpdating(false)
     }
   

  return (
     <div className="">
  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300/30 pb-4 gap-5 mx-2 ${isUpdating && "opacity-70"}`}>
    {/* Left Side: Image + Details */}
    <div className="flex items-start sm:items-center gap-4 flex-1 mt-4">
      <img
        src={product.imageCover}
        alt=""
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="space-y-2 flex-1">
        <h3 className="text-black font-semibold text-base sm:text-lg">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category?.name}</p>

        <div className="flex flex-wrap items-center gap-1">
          <Rating rating={product.ratingsAverage} />
          <p className="text-gray-500 text-sm font-medium">
            {product.ratingsAverage} <span className="text-gray-400">({product.quantity})</span>
          </p>
        </div>
      </div>
    </div>

    {/* Right Side: Quantity + Price + Trash */}
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-3 sm:gap-5 w-full sm:w-auto">
      {/* Quantity Controls */}
      <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-md">
         <button
          onClick={() => handleUpdate({_id, count: count - 1})}
         >
            <FontAwesomeIcon icon={faMinus} />
         </button>
      
        <span className="min-w-[24px] text-center">{count}</span>
         <button
          onClick={() => handleUpdate({_id, count: count + 1})}
         >
            <FontAwesomeIcon icon={faPlus} />
         </button>
      </div>

      {/* Price */}
      <div className="text-center sm:text-right">
        <p className="font-semibold text-gray-800">{price}EGB</p>
        
      </div>

      {/* Trash Icon */}
       <button
       onClick={()=>{
        HandleRemoveProduct({_id})
       }}
         className="text-red-500 hover:text-red-600 cursor-pointer text-lg">
         <FontAwesomeIcon
        icon={faTrash}

         
    />
       </button>
    </div>
  </div>
</div>

  )
}
