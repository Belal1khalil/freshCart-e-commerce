
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/Images/freshcart-logo.svg"
import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import logo2 from "../../assets/Images/mini-logo.png"
import { Link } from "react-router"

export default function Footer() {
  return (
    <>
    <footer className="py-5 bg-white border-t border-gray-400/20">
     
       <div className="container">
        <div className="grid md:grid-cols-2  xl:grid-cols-5 py-8 gap-6 ">

         <div className=" xl:col-span-2 space-y-3">
          <img src= {logo} alt="" />
          <p className="text-gray-500 line-clamp-3 text-sm font-normal">
         
           FreshCart is versatile e-commerce platform offering a wide range of products, from clothing to electronics, It privides a user-friendly experience for seamless shopping across diverse categories.
         
         </p>

         <ul className="space-y-4 flex  gap-4    text-lg text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram}/>

            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest}/>
            </a>
          </li>
         </ul>
       
         </div>
       
         <div>
           <h2 className="text-lg font-bold mb-4 ">Categories</h2>
             <ul className="space-y-4 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={``}>
                 Men's Fashion
                </Link>
              </li>
              <li>
                <Link to={``}>
                 woman's Fashion
                </Link>
              </li>
              <li>
                <Link to={``}>
                Baby & Toys
                </Link>
              </li>
              <li>
                <Link to={``}>
               Beauty & Health
                </Link>
              </li>
                <li>
                <Link to={``}>
                Electronics
                </Link>
              </li>
             
             </ul>
          </div>

           <div>
           <h2 className="text-lg font-bold mb-4">Quick Links</h2>
             <ul className="space-y-4 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={`/about`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to={`/contact`}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={`/privacy-policu`}>
                Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={`/terms`}>
                Terms of Service
                </Link>
              </li>
                <li>
                <Link to={`/shipping-policy`}>
                Shipping Policy
                </Link>
              </li>
             
             </ul>
          </div>

           <div>
           <h2 className="text-lg font-bold mb-4">Customer Service</h2>
             <ul className="space-y-4 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={`/account`}>
                  My Account           
                </Link>
              </li>
              <li>
                <Link to={`/orders`}>
                 My Orders
                </Link>
              </li>
              <li>
                <Link to={`/wishlist`}>
                Wishlist
                </Link>
              </li>
              <li>
                <Link to={` /returns-refunds`}>
                  Returns & Refunds
                </Link>
              </li>
                <li>
                <Link to={`/help-center`}>
                   Help Center
                </Link>
              </li>
             
             </ul>
          </div>

      </div>
    
      <div className="flex justify-between items-center border-t border-gray-400/20 py-5 ">
        <p>&copy; {new Date().getFullYear()} Fresh Cart. All rights reserved.</p>
        <img src={logo2} className="w-8" alt="" />
      </div>
       </div>
   
    </footer>
    </>
  )
}
