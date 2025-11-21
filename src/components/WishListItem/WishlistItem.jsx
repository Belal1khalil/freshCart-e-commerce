// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMinus,
//   faPlus,
//   faShoppingCart,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import Rating from "../Rating/Rating";
// import { useContext } from "react";
// import { CartContext } from "../Context/Cart.context";
// import { WishListContext } from "../Context/WishList.context";

// export default function WishlistItem({ productInfo }) {
//   const { ratingsQuantity, id, ratingsAverage, price, imageCover, category } =
//     productInfo;
//   const { HandleAddingProductToCart } = useContext(CartContext);
//   const { handleRemoveFromWishList } = useContext(WishListContext);

//   return (
//     <div
//       className={`flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300/30 pb-4 gap-5 mx-2 `}
//     >
//       {/* Left Side: Image + Details */}
//       <div className="flex flex-col items-center md:flex-row gap-4 flex-1 mt-4">
//         <img
//           src={imageCover}
//           alt=""
//           className="w-24 h-24 rounded-lg object-cover"
//         />

//         <div className="flex-col items-center md:items-start flex gap-1">
//           <p className="text-sm text-gray-500">{category?.name}</p>
//           <h3 className="text-black font-semibold text-base sm:text-lg">
//             {category?.title}
//           </h3>

//           <div className="flex flex-wrap items-center gap-1">
//             <Rating rating={ratingsAverage} />
//             <p className="text-gray-500 text-sm font-medium">
//               {ratingsAverage}{" "}
//               <span className="text-gray-400">({ratingsQuantity})</span>
//             </p>
//           </div>
//           <p className="font-semibold text-primary-600">{price} EGP</p>
//         </div>
//       </div>

//       {/* Right Side: Quantity + Price + Trash */}
//       <div className="flex justify-center items-center gap-3">

//         <button
//           onClick={() => {
//             HandleAddingProductToCart({ id });
//           }}
//           className="btn bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white mt-2 "
//         >
//           <FontAwesomeIcon className="mx-1" icon={faShoppingCart} />
//           Add To Cart
//         </button>

//         <button
//           onClick={() => {
//             handleRemoveFromWishList({ id });
//           }}
//           className="text-gray-500 mt-2 hover:text-gray-600 cursor-pointer text-lg"
//         >
//           <FontAwesomeIcon icon={faTrash} />
//         </button>
//       </div>
//     </div>
//   );
// }


































import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { CartContext } from "../Context/Cart.context";
import { WishListContext } from "../Context/WishList.context";

export default function WishlistItem({ productInfo }) {
  const { ratingsQuantity, id, ratingsAverage, price, imageCover, category } =
    productInfo;

  const { HandleAddingProductToCart } = useContext(CartContext);
  const { handleRemoveFromWishList } = useContext(WishListContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 gap-4 sm:gap-6 px-3 py-4">
      
      {/* Image + Details */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
        <img
          src={imageCover}
          alt=""
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover"
        />

        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <p className="text-lg font-semibold">{category?.name}</p>

          <h3 className="text-black font-semibold text-base sm:text-lg leading-tight">
            {category?.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm">
            <Rating rating={ratingsAverage} />
            <p className="text-gray-500 font-medium">
              {ratingsAverage}
              <span className="text-gray-400"> ({ratingsQuantity})</span>
            </p>
          </div>

          <p className="font-semibold text-primary-600 text-sm sm:text-base mt-1">
            {price} EGP
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 sm:gap-3">
        <button
          onClick={() => {
            HandleAddingProductToCart({ id });
          }}
          className="btn whitespace-nowrap bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white px-4 py-2 rounded-md text-sm sm:text-base"
        >
          <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
          Add To Cart
        </button>

        <button
          onClick={() => {
            handleRemoveFromWishList({ id });
          }}
          className="text-gray-500 hover:text-gray-600 cursor-pointer text-lg sm:text-xl"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

