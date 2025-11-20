import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Sigup";
import ResetPassword from "./pages/ResetPassword/Resetpassword";
import ForgetPassword from "./pages/Forgetpassword/ForgetPassword";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";
import Favourites from "./pages/Favourites/Favourites";
import Orders from "./pages/Orders/Orders";
import Productdetails from "./pages/Productdetails/Productdetails";
import SearchProduct from "./pages/SearchProduct/SearchProduct";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import WishList from "./pages/Wishlist/WishList";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import ReseetPassword from "./pages/reset/ReseetPassword";
import AuthProvider from "./components/Context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./components/Context/Cart.context";
import WishListProvider from "./components/Context/WishList.context";
import AccountLayout from "./components/AccoutLayout.jsx/AccountLayout";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import Offers from "./pages/Offers/Offers";
import FeaturedProducts from "./components/FeaturedProduct/FeaturedProducts";
import Address from "./components/Address/Address";
import Paymentmethod from "./components/Paymentmethod/Paymentmethod";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "verify-email", element: <VerifyEmail /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "reset", element: <ReseetPassword /> },
        { path: "featured-products", element: <FeaturedProducts /> },
        { path: "brands", element: <Brands /> },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        { path: "categories", element: <Categories /> },
        { path: "offers", element: <Offers /> },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "favorites",
          element: (
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        { path: "product/:id", element: <Productdetails /> },
        { path: "searchproduct", element: <SearchProduct /> },
        {
          path: "account",
          element: (
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "orders",
              element: <Orders />,
            },

            {
              path: "wishlist",
              element: <WishList />,
            },
            {
              path: "account-info",
              element: <AccountInfo />,
            },
            {
              path: "addresses",
              element: <Address />,
            },
            {
              path: "payment-methods",
              element: <Paymentmethod />,
            },
            {
              path: "logout",
              element: <Login />,
            },
          ],
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);


 const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5000,
      gcTime:10000,
      // refetchInterval:2000,
      // refetchIntervalInBackground:true,
      // retry:3,
      // retryDelay:5000
    }
  }
 });

  return (
    <>
      <QueryClientProvider client={queryClient}>
         <OfflineScreen>
        <AuthProvider>
          <CartProvider>
            <WishListProvider>
                  <RouterProvider router={router} />
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeButton={false}
                    closeOnClick={true}
                  />
            </WishListProvider>
          </CartProvider>
        </AuthProvider>
      </OfflineScreen>
      <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}
