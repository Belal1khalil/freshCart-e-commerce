import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation , Pagination , Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import homeSliderImg from "../../assets/Images/home-slider-1.png"

export default function HomeSlider() {
  return (

    <>
   <Swiper
   slidesPerView={1}
   loop={true}
   modules={[Navigation ,Pagination , Autoplay]}
   
   pagination = {{clickable: true}}
   autoplay={{delay:3000}}
   >
     <SwiperSlide>
        <div style={{
         backgroundImage : `url('${homeSliderImg}')`,
         backgroundPosition : "center",
         backgroundSize : "cover",
        }}>
            <div className="overlay py-24 text-white bg-gradient-to-r from-primary-600/95 to-primary-600/45 ">
                <div className="container  space-y-4">
                    <h2 className="text-2xl  font-bold ">Fresh Organic Produce <br /> Delivered to Your Door </h2>
                    <p className=""> Get 20% off your first order with code: FRESH20</p>
                    <div className="space-x-2 ">
                        <button className="btn  text-primary-600  border-2 border-white bg-white hover:bg-gray-100 ">Shop Now</button>
                        <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 ">View Deals</button>
                    </div>
                </div>
            </div>
        </div>
     </SwiperSlide>

       <SwiperSlide>
        <div style={{
         backgroundImage : `url('${homeSliderImg}')`,
         backgroundPosition : "center",
         backgroundSize : "cover",
        }}>
            <div className="overlay py-24 text-white bg-gradient-to-r from-primary-600/95 to-primary-600/45 ">
                <div className="container  space-y-4">
                    <h2 className="text-2xl  font-bold ">Fresh Organic Produce <br /> Delivered to Your Door </h2>
                    <p className=""> Get 20% off your first order with code: FRESH20</p>
                    <div className="space-x-2 ">
                        <button className="btn  text-primary-600  border-2 border-white bg-white hover:bg-gray-100 ">Shop Now</button>
                        <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 ">View Deals</button>
                    </div>
                </div>
            </div>
        </div>
     </SwiperSlide>

       <SwiperSlide>
        <div style={{
         backgroundImage : `url('${homeSliderImg}')`,
         backgroundPosition : "center",
         backgroundSize : "cover",
        }}>
            <div className="overlay py-24 text-white bg-gradient-to-r from-primary-600/95 to-primary-600/45 ">
                <div className="container  space-y-4">
                    <h2 className="text-2xl  font-bold ">Fresh Organic Produce <br /> Delivered to Your Door </h2>
                    <p className=""> Get 20% off your first order with code: FRESH20</p>
                    <div className="space-x-2 ">
                        <button className="btn  text-primary-600  border-2 border-white bg-white hover:bg-gray-100 ">Shop Now</button>
                        <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 ">View Deals</button>
                    </div>
                </div>
            </div>
        </div>
     </SwiperSlide>
   </Swiper>
    </>
  )


  
}
