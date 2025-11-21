import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBabyCarriage,
  faBars,
  faBolt,
  faBoxesStacked,
  faChevronCircleDown,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faShoppingCart,
  faSpinner,
  faSuitcaseMedical,
  faTags,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import logo from "../../assets/Images/freshcart-logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth.context";
import { CartContext } from "../Context/Cart.context";
import { WishListContext } from "../Context/WishList.context";
import { useOnlineStatus } from "../../hooks/UseOnlineStatus";

export default function Navbar() {
  const { Logout, token } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartInfo, isLoading } = useContext(CartContext);
  const { isLoading: wishListLoading, wishListinfo } =
    useContext(WishListContext);
  const isOnline = useOnlineStatus();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <div className="container  ">
          {/* Top Navbar */}

          <div className=" hidden lg:flex justify-between items-center  border-b border-gray-300/30 py-2 text-sm">
            <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center ">
              <li className="flex ">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
              {isOnline && (
                <li className="text-primary-500">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>

            <ul className="flex gap-5 items-center">
              <li>
                <Link to={`track-order`}>Track Order</Link>
              </li>
              <li>
                <Link to={`about`}>About Us</Link>
              </li>
              <li>
                <Link to={`contact`}>Contact Us</Link>
              </li>
              <li>
                <select>
                  <option value="USD">EGB</option>
                  <option value="EUR">SER</option>
                  <option value="GBP">GBP</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="ar">العربية</option>
                  <option value="en">الإنجليزية</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Main Navbar */}
          <nav className="flex justify-between items-center py-5">
            <h1>
              <Link to={`/`}>
                <img src={logo} alt="Freshcart" />
              </Link>
            </h1>
            <search className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search for products"
                className="form-control min-w-96 "
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-1/2 "
              />
            </search>

            <ul className=" hidden lg:flex items-center gap-8  ">
              <li>
                <NavLink
                  to={`/account/wishlist`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <div className="relative flex justify-center ">
                    <FontAwesomeIcon className="text-xl" icon={faHeart} />
                    <span className="absolute size-5 rounded-full bg-primary-600 text-white right-0 -top-1 flex justify-center items-center -translate-y-1/2">
                      {wishListLoading ? (
                        <span>0</span>
                      ) : (
                        wishListinfo?.data?.length || 0
                      )}
                    </span>
                  </div>
                  <span className="text-sm mt-1">wishlist</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/cart`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      className="text-xl mx-auto"
                      icon={faShoppingCart}
                    />
                    <span className="absolute size-5 rounded-full bg-primary-600 text-white right-0 -top-1 flex justify-center items-center -translate-y-1/2">
                      {isLoading ? (
                        <span>0</span>
                      ) : (
                        cartInfo?.numOfCartItems || 0
                      )}
                    </span>
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/account/account-info`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon className="text-xl mx-auto" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>

              {!token ? (
                <>
                  <li>
                    <NavLink
                      to={`/signup`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-xl mx-auto"
                        icon={faUserPlus}
                      />
                      <span className="text-sm">Signup</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`/login`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-xl mx-auto"
                        icon={faAddressCard}
                      />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  onClick={Logout}
                  className={` cursor-pointer flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200 `}
                >
                  <FontAwesomeIcon
                    className="text-xl mx-auto"
                    icon={faRightFromBracket}
                  />
                  <span className="text-sm">Logout</span>
                </li>
              )}
            </ul>

            <button
              className="btn lg:hidden  bg-primary-600 text-white hover:bg-primary-600/95"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon
                  className="text-sm lg:hidden "
                  icon={faXmark}
                />
              ) : (
                <FontAwesomeIcon
                  className="text-2xl lg:hidden "
                  icon={faBars}
                />
              )}
            </button>
          </nav>
        </div>

        {/* category  navigation */}
        <nav className=" hidden lg:block bg-gray-100 py-4">
          <div className="container flex gap-8 items-center ">
            <div className="relative group ">
              <button className="btn bg-primary-600 text-white hover:bg-primary-600/95 flex gap-3 items-center  ">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className=" hidden group-hover:block absolute top-10 min-w-60 bg-white shadow-md *:py-3 *:px-3 *:hover:bg-gray-200  rounded-lg divide-gray-300/20 divide-y-2 ">
                <li>
                  <Link className="flex gap-2 items-center" to={`men-fashion`}>
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 items-center"
                    to={`women-fashion`}
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faPersonDress}
                    />
                    <span>Women's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center" to={`baby-toys`}>
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faBabyCarriage}
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 items-center"
                    to={`beauty-health`}
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faSuitcaseMedical}
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center" to={`electronics`}>
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faBolt}
                    />
                    <span>Electronics</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`all-categories`}
                    className="flex gap-2 items-center"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faEllipsis}
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex items-center gap-5 ">
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>

              <li>
                <NavLink to={`/featured-products`}>Featured Products</NavLink>
              </li>

              <li>
                <NavLink to={`/offers`}>Offers</NavLink>
              </li>

              <li>
                <NavLink to={`/brands`}>Brands</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* offCanvas */}

        {isMenuOpen && (
          <>
            <div
              className="  background  cursor-pointer fixed inset-0 bg-black/50 -z-30"
              onClick={toggleMenu}
            ></div>
            <div className="  offCanvas space-y-5 fixed z-40 bg-white top-0 bottom-0 p-5  animate-slide-in">
              <div className="flex justify-between items-center mb-5 border-b-1 border-gray-300/50 pb-5">
                <img src={logo} alt="Fresh Cart logo" />
                <button className="btn flex w-8 h-8 rounded-full justify-center items-center bg-gray-200 ">
                  <FontAwesomeIcon
                    className="text-sm"
                    icon={faXmark}
                    onClick={toggleMenu}
                  />
                </button>
              </div>

              <search className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="form-control min-w-64 "
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 top-1/2 -translate-1/2 "
                />
              </search>
              <div>
                <h2 className="text-xl font-bold">Main Menu</h2>
                <ul className="   *:hover:bg-gray-100 transition-colors duration-300 space-y-2 mt-3">
                  <li>
                    <NavLink
                     onClick={toggleMenu}
                      to={`/account/wishlist`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-100" : ""
                        } flex  gap-2  transition-colors duration-200 py-3 px-2`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl  " icon={faHeart} />
                      <span className="text-sm">WishList</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      onClick={toggleMenu}
                      to={`/cart`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-100" : ""
                        } flex  gap-2  transition-colors duration-200  py-3 px-2`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-xl mx-auto"
                          icon={faShoppingCart}
                        />
                        <span className="absolute size-5 rounded-full bg-primary-600 text-white right-0 -top-2 flex justify-center items-center -translate-y-1/2">
                          {isLoading ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                          ) : (
                            cartInfo?.numOfCartItems
                          )}
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      onClick={toggleMenu}
                      to={`/account/account-info`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primay-100" : ""
                        } flex gap-2 transition-colors duration-200  py-3 px-2`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl " icon={faUser} />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                     <li>
                    <NavLink
                      onClick={toggleMenu}
                      to={`/featured-products`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primay-100" : ""
                        } flex gap-2 transition-colors duration-200  py-3 px-2`;
                      }}
                    >
                    <FontAwesomeIcon icon={faBoxesStacked} className="text-xl" />
                      <span className="text-sm">Featured Products</span>
                    </NavLink>
                  </li>
                     <li>
                    <NavLink
                      onClick={toggleMenu}
                      to={`/offers`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primay-100" : ""
                        } flex gap-2 transition-colors duration-200  py-3 px-2`;
                      }}
                    >
                     <FontAwesomeIcon className="text-red-500 text-xl" icon={faTags} />

                      <span className="text-sm">Offers</span>
                    </NavLink>
                  </li>
                     <li>
                    <NavLink
                      onClick={toggleMenu}
                      to={`/brands`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primay-100" : ""
                        } flex gap-2 transition-colors duration-200  py-3 px-2`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl " icon={faTags} />
                      <span className="text-sm">Brands</span>
                    </NavLink>
                  </li>

            
                </ul>
              </div>
              <div className="border-t-1 border-gray-300/50 pt-5">
                <h2 className="text-xl font-bold">Account</h2>
                <ul className="*:hover:bg-gray-100 transition-colors duration-300 space-y-2 mt-3">
                  {!token ? (
                    <>
                      <li>
                        <NavLink
                          onClick={toggleMenu}
                          to={`/signup`}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-primary-600 bg-primary-100" : ""
                            } flex gap-2  transition-colors duration-200  py-3 px-2`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl "
                            icon={faUserPlus}
                          />
                          <span className="text-sm">Signup</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleMenu}
                          to={`/login`}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-primary-600 bg-primary-100" : ""
                            }  flex gap-2  transition-colors duration-200  py-3 px-2`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl "
                            icon={faAddressCard}
                          />
                          <span className="text-sm">Login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li
                      onClick={Logout}
                      className={` cursor-pointer flex  gap-2  transition-colors duration-200  py-3 px-2 `}
                    >
                      <FontAwesomeIcon
                        className="text-xl "
                        icon={faRightFromBracket}
                      />
                      <span className="text-sm">Logout</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
