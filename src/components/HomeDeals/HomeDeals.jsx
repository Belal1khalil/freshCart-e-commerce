import { faArrowRight   } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from '../ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import { GetAllProducts } from '../../services/Products-services';
import Loading from '../Loading/Loading';
import { calcTimeLeft } from '../../utils/counterdown';

import UseProdutcs from '../../hooks/UseProdutcs';
import HomeDealsSkeleton from '../skeleton/HomeDealsSkeleton';




export default function HomeDeals() {
    const {products ,isLoading , isError , error } = UseProdutcs();
     const [timeleft , setTimeLeft] = useState({hours:0 , minutes:0 , seconds:0});
  
useEffect(()=>{
 const timer =  setInterval(() => {
     const newLeftDate = calcTimeLeft();
     setTimeLeft(newLeftDate);
  }, 1000);
  return function() {
   clearInterval(timer)
  }

} ,[])



 if(isLoading) {
   return <HomeDealsSkeleton/>
 }


 const deals = products.filter((product)=>product.priceAfterDiscount).slice(0,5);

  return (
   <>
    <section>
      <div className="container">
        <div className='flex justify-between items-center'>
         <div className='space-y-2'>
           <h2 className='text-2xl font-bold text-black '>Deals of the Day</h2>
            <div className='flex gap-3 items-center'>
              <p className='text-md'>Offers end in:</p>
           <div className="counter flex gap-2">
            <div className='bg-black text-sm text-white size-7 rounded-md  flex justify-center items-center'>
                 {String(timeleft.hours).padStart(2 , "0")}
           </div>
           <span>:</span>
             <div className='bg-black text-sm text-white size-7 rounded-md  flex justify-center items-center'>
                {String(timeleft.minutes).padStart(2,"0")}
           </div>
           <span>:</span>
             <div className='bg-black text-sm text-white size-7 rounded-md  flex justify-center items-center'>
                 {String(timeleft.seconds).padStart(2 , "0")}
           </div>
           </div>
            </div>
         </div>
            <Link 
            className='flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-600 transition-colors duration-200'
            to={`/offers`}>
              View All Deals
              <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
        </div>

        <div className=' py-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 '>
            {
              deals ? deals.map((product)=>(
                  <ProductCard key={product._id} productInfo={product}/>
              )):""
            }
        </div>
      </div>
    </section>
   </>
  )
}
