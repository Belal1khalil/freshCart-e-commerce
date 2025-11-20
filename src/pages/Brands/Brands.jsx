import React, { useEffect, useState } from "react";
import { getAllBrands } from "../../services/Brand-services";
import Loading from "../../components/Loading/Loading";
import BrandsSkeleton from "../../components/skeleton/BrandsSkeleton";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Brands() {
  const [brands, setBrands] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, SetError] = useState(null);

  async function handleBrands() {
    try {
      SetIsLoading(true);
      const response = await getAllBrands();
      if (response.success) {
        SetIsLoading(false);
        setBrands(response.data.data);
      }
    } catch (error) {
      SetIsLoading(false);
      SetError(error);
    }
  }

  useEffect(() => {
    handleBrands();
  }, []);

  if (isLoading) {
    return <BrandsSkeleton />;
  }

  return (
    <>
    <PageMetaData title="Brands - Fresh Cart" description="Explore our collection of popular brands."/>
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Brands
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover top brands with premium quality products
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="card bg-white overflow-hidden shadow-lg  rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="image ">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="  rounded-md object-cover "
                  />
                </div>
                <h1 className="text-md font-bold text-black text-center py-3">
                  {brand.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
