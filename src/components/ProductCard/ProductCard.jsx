import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faPlus,
  faRotate,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { calcDiscount } from "./../../utils/discont-utils";
import Rating from "../Rating/Rating";
import { Link, Links } from "react-router";
import { useContext } from "react";
import { CartContext } from "../Context/Cart.context";
import { WishListContext } from "../Context/WishList.context";

export default function ProductCard({ productInfo }) {
  const {
    imageCover,
    price,
    priceAfterDiscount,
    ratingsAverage,
    title,
    ratingsQuantity,
    category,
    id,
  } = productInfo;
  const { HandleAddingProductToCart } = useContext(CartContext);
  const { handleAddToWishList } = useContext(WishListContext);

  return (
    <>
      <div className="card relative bg-white shadow-lg overflow-hidden rounded-xl ">
        <div className="image">
          <Link to={`/product/${id}`} className="block">
            <img className="h-60 mx-auto mt-1" src={imageCover} alt="" />
          </Link>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <span className="text-sm text-gray-500">{category.name}</span>

            <h2 className="font-semibold">
              <Link to={`/product/${id}`} className="line-clamp-1">
                {title}
              </Link>
            </h2>
          </div>

          <div className="rating flex items-center gap-2">
            <Rating rating={ratingsAverage} />

            <span>{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>

          <div className=" flex justify-between items-center">
            <div className=" price space-x-2">
              <span className="text-lg text-primary-600 ">{price} EGP</span>
              {priceAfterDiscount && (
                <del className=" text-gray-500 ">{priceAfterDiscount} EGB</del>
              )}
            </div>

            <button
              onClick={() => {
                HandleAddingProductToCart({ id });
              }}
              className="btn bg-primary-600 hover:bg-primary-700 transition-colors duration-200 p-0 size-8 rounded-full text-sm text-white"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div className="actions flex flex-col gap-4 absolute top-4 right-4 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
          <button onClick={() => handleAddToWishList({ id })}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faRotate} />
          </button>
          <button>
            <Link to={`/product/${id}`}>
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>
        {priceAfterDiscount && (
          <span className="absolute top-4 left-4 bg-red-500 px-2 py-1 text-white rounded-md">
            -{calcDiscount({ price, priceAfterDiscount })}%
          </span>
        )}
      </div>
    </>
  );
}
