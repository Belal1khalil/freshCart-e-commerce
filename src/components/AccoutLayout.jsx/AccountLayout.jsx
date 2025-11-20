import { Link, NavLink, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBox,
  faHeart,
  faStar,
  faLocationDot,
  faCreditCard,
  faUserPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

export default function AccountLayout() {
  const { isUserInfo, Logout } = useContext(AuthContext);

  return (
    <section>
      <div className="container grid grid-cols-12 gap-8 py-8">
        {/* Sidebar */}
        <aside className=" col-span-12   lg:col-span-3 max-h-max  ">
          <div className="bg-white rounded-xl shadow p-5">
            {/* User Profile */}
            <div className="flex items-center gap-3 pb-5 border-b">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/765/138/large_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover bg-red-500 block "
              />

              <div>
                <h3 className="font-semibold">{isUserInfo?.name || "user"}</h3>
                <p className="text-sm text-gray-500 w-32 truncate ">
                  {isUserInfo?.email || "john.doe@example.com"}
                </p>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="mt-5 flex flex-col gap-1 text-gray-700">
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "bg-primary-200"
                      : "text-gray-600  hover:bg-gray-50 hover:text-gray-900"
                  } flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 `;
                }}
                to="/account/account-info"
              >
                <FontAwesomeIcon icon={faUserPen} className="text-lg" />
                Account Info
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-primary-200 " : ""
                  } flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100`;
                }}
                to="/account/orders"
              >
                <FontAwesomeIcon icon={faBox} className="text-lg" />
                Orders
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-primary-200 " : ""
                  } flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100`;
                }}
                to="/account/wishlist"
              >
                <FontAwesomeIcon icon={faHeart} className="text-lg" />
                Wishlist
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-primary-200" : ""
                  } flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100`;
                }}
                to="/account/addresses"
              >
                <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                Addresses
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "bg-primary-200" : ""
                  } flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-gray-100`;
                }}
                to="/account/payment-methods"
              >
                <FontAwesomeIcon icon={faCreditCard} className="text-lg" />
                Payment Methods
              </NavLink>

              <Link
                onClick={Logout}
                to="/login"
                className="flex items-center gap-2 mt-4 text-red-500 font-medium hover:bg-red-50 rounded-lg px-3 py-2"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </Link>
            </nav>
          </div>
        </aside>
        

        {/* Right Content */}
        <div className=" col-span-12  lg:col-span-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
