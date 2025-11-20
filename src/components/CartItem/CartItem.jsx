import {
  faL,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rating from "../Rating/Rating";
import { useContext, useState } from "react";
import { CartContext } from "../Context/Cart.context";

export default function CartItem({ productInfo }) {
  const { price, count, product } = productInfo;
  const { HandleRemoveProduct, HandleUpdateProductQuantity } =
    useContext(CartContext);
  const { _id } = product;
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleUpdate({ _id, count }) {
    setIsUpdating(true);
    await HandleUpdateProductQuantity({ _id, count });
    setIsUpdating(false);
  }

  return (
    <div className="">
      <div
        className={`flex flex-col xl:flex-row border-b border-gray-300/30 pb-4 gap-5 mx-2 ${
          isUpdating && "opacity-70"
        }`}
      >
        {/* Left Side: Image + Details */}
        {
          <div className="flex flex-col xl:flex-row  items-center gap-4 flex-1 mt-4">
            <div className="img">
              <img
                src={product.imageCover}
                alt=""
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>

            <div className="space-y-3 flex-1">
              <div className="title space-y-2 flex flex-col items-center md:items-start">
                <h3 className="text-black font-semibold text-base sm:text-lg">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 ">
                  {product.category?.name}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-col md:flex-row">
                <Rating rating={product.ratingsAverage} />
                <p className="text-gray-500 text-sm font-medium">
                  {product.ratingsAverage}{" "}
                  <span className="text-gray-400">({product.quantity})</span>
                </p>
              </div>
            </div>
          </div>
        }

        {/* Right Side: Quantity + Price + Trash */}

        <div className="flex flex-wrap  items-center justify-between  gap-3 sm:gap-5 w-full sm:w-auto">
      
          <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-md">
            <button onClick={() => handleUpdate({ _id, count: count - 1 })}>
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <span className="min-w-[24px] text-center">{count}</span>
            <button onClick={() => handleUpdate({ _id, count: count + 1 })}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="text-center sm:text-right">
            <p className="font-semibold text-gray-800">{price}EGB</p>
          </div>

           <div className="remove">
            <button
            onClick={() => {
              HandleRemoveProduct({ _id });
            }}
            className="text-red-500 hover:text-red-600 cursor-pointer text-lg"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
           </div>
        </div>
      </div>
    </div>
  );
}
