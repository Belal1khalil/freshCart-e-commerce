import {
  faCartShopping,
  faMinus,
  faPlus,
  faStar,
  faTruck,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { useProductdetails } from "../../hooks/useProductdetails";
import ProductDetailsSkeleton from "../../components/skeleton/ProductDetailsSkeleton";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Productdetails() {
  
  const { id } = useParams();
  const { productDetails, isLoading } = useProductdetails(id);

 

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <PageMetaData title={`${productDetails.title} - Fresh Cart`} description={productDetails.description} />
      {/* Top section */}
      <ProductInfo productDetails={productDetails} />
      {/* <ProductDetailsTabs/> */}
      <RelatedProducts productDetails={productDetails} />
      {/* Similar Products */}
    </>
  );
}
