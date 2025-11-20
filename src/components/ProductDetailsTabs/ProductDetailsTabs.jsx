import { useState } from "react";
import ProductInfoTab from "../ProductInfoTab/ProductInfoTab";
import ReviewsTab from "../ReviewsTab/ReviewsTab";
import ShippingTab from "../ShippingTab/ShippingTab";


export default function ProductDetailsTabs() {
    const [activeTab , setActiveTab] = useState("details");
     
     function GetActiveTab() {
        switch (activeTab) {
         case "details": 
         return <ProductInfoTab/>;
         case "reviews":
            return <ReviewsTab/>;
            case "shipping":
                return <ShippingTab/>;
                default:
                    return <ProductInfoTab/>
        }
     }




  return (
    <>
    <section>
        <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="border-b border-gray-200">
                 <div className="flex">
                    <button 
                    onClick={()=>setActiveTab("details")}
                    className={`px-6 py-4 ${activeTab === "details" ? `border-b-2 border-primary-600` : " text-gray-600"} font-medium`}>
                    
                        product Details
                    </button>
                    <button 
                     onClick={()=>setActiveTab("reviews")}
                    className={`px-6 py-4  font-medium ${activeTab === "reviews" ? `border-b-2 border-primary-600` : " text-gray-600"}`}>
                        Reviews (149)
                    </button>
                    <button 
                    onClick={()=>setActiveTab("shipping")}
                    className={`px-6 py-4 font-medium ${activeTab === "shipping" ? `border-b-2 border-primary-600` : " text-gray-600"}`}>
                        shipping &amp; Returns
                    </button>
                 </div>
                </div>
                <div className="p-6">
                   {GetActiveTab()}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}


