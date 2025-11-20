import React from "react";
import PageMetaData from "../PageMetaData/PageMetaData";

export default function Paymentmethod() {
  return (
    
   <>
   <PageMetaData title="Payment Methods - Fresh Cart" description="Manage your saved payment methods."/>
    <section className="mt-3">
      <div className=" space-y-3 bg-white shadow-2xl flex flex-col justify-center items-center p-6 rounded-lg">
        <h1 className="text-2xl font-bold">No saved cards</h1>
        <p className="text-center text-xl">
          Cards saved during the checkout process will display here. We use
          encrypted methods to store your details securely
        </p>
      </div>
    </section>
   
   </>
  );
}
