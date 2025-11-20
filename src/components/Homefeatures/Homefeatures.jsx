import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Homefeatures() {
  return (
    <>
      <div className=" bg-white">
        <div className="container mx-auto   py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="flex   justify-center items-center gap-2 border-2 border-gray-200/30 rounded-md py-3">
              <FontAwesomeIcon
                className="bg-primary-400/60 text-primary-600 text-xl size-12 rounded-full px-3 py-3 "
                icon={faTruck}
              />
              <div>
                <p className="font-bold text-black">Free Delivery</p>
                <span className="text-gray-400/60 text-nowrap ">
                  Orders $50 or more
                </span>
              </div>
            </div>

            <div className="flex  justify-center items-center gap-2  border-2 border-gray-200/30 rounded-md py-3  ">
              <FontAwesomeIcon
                className="bg-primary-400/60 text-primary-600 text-xl size-12 rounded-full px-3 py-3 "
                icon={faRotateLeft}
              />
              <div>
                <p className="font-bold text-black"> 30 Days Return</p>
                <span className="text-gray-400/60 text-nowrap">
                  Satisfaction guaranteed
                </span>
              </div>
            </div>

            <div className="flex  justify-center items-center gap-2  border-2 border-gray-200/30 rounded-md py-3 ">
              <FontAwesomeIcon
                className="bg-primary-400/60 text-primary-600 text-xl size-12 rounded-full px-3 py-3 "
                icon={faShieldHalved}
              />
              <div>
                <p className="font-bold text-black">Secure Payment</p>
                <span className="text-gray-400/60 text-nowrap">
                  {" "}
                  100% protected checkout
                </span>
              </div>
            </div>
            <div className="flex  justify-center items-center gap-2  border-2 border-gray-200/30 rounded-md py-3 ">
              <FontAwesomeIcon
                className="bg-primary-400/60 text-primary-600 text-xl size-12 rounded-full px-3 py-3 "
                icon={faHeadset}
              />
              <div>
                <p className="font-bold text-black">24/7 Support</p>
                <span className="text-gray-400/60 text-nowrap">
                  Ready to help anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
