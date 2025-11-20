import { useEffect, useState } from "react"
import { GetAllProducts } from "../../services/Products-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import UseProdutcs from "../../hooks/UseProdutcs";
import FeaturedProductsSkeleton from "../skeleton/FeaturedProductsSkeleton";
import PageMetaData from "../PageMetaData/PageMetaData";

export default function FeaturedProducts() {
    
     const {products ,isLoading , isError , error } = UseProdutcs();

    if(isLoading) {
        return <FeaturedProductsSkeleton/>
    }


  return (
    <>
    <PageMetaData title="Featured Products - Fresh Cart" description="Browse our selection of featured products."/>
    <section className="mb-5">
        <div className="container">
            <h2 className="text-2xl text-black font-bold my-5">Featurd Products</h2>

            <div className="grid md:grid-cols-3 lg:gris-cols-4 xl:grid-cols-5 gap-5">
               {
                products?.map((product)=>
                    <ProductCard key={product._id} productInfo={product}/>
                )
               }
            </div>
        </div>
    </section>
    </>
  )
}
