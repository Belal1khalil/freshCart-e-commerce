import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Rating from "../Rating/Rating";
import { GetAllProducts } from "../../services/Products-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/modules";
import RelatedProductsSkeleton from "../skeleton/RelatedProductsSkeleton";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;

  const [relatedProducts, setRelatedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false);

  async function fetchRelatedProducts() {
    try {
      setIsLoading(true);
      const response = await GetAllProducts({ category: category._id });

      if (response.success) {
        setIsLoading(false);
        setRelatedProducts(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchRelatedProducts();
  }, []);

  if (isLoading) {
    return <RelatedProductsSkeleton />;
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-black">
              You Might Also Like
            </h2>
            <div className="flex space-x-2">
              <button className=" related-prev-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className=" related-next-btn  w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={10}
            navigation={{
              nextEl: ".related-next-btn",
              prevEl: ".related-prev-btn",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
