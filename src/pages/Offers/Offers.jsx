


import PageMetaData from '../../components/PageMetaData/PageMetaData';
import ProductCard from '../../components/ProductCard/ProductCard';
import OffersSkeleton from '../../components/skeleton/OffersSkeleton';
import UseProdutcs from '../../hooks/UseProdutcs';



export default function Offers() {
     const {products ,isLoading , isError , error } = UseProdutcs()
    const deals = products?.filter((product)=>product.priceAfterDiscount)
   
    if(isLoading) {
       return <OffersSkeleton/>
     }

     return (
       <>
       <PageMetaData title="Offers - Fresh Cart" description="Explore the latest deals and offers on our products."/>
       <section>
        <div className="container">
          
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
