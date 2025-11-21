import {
  faArrowRight,
  faChevronLeft,
  faCircleInfo,
  faCreditCard,
  faMoneyBill1Wave,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { CartContext } from "../../components/Context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { createOrder } from "../../services/payment-service";
import { toast } from "react-toastify";
import PageMetaData from "./../../components/PageMetaData/PageMetaData";
import CheckoutSkeleton from "../../components/skeleton/CheckoutSkeleton";

// ✅ Yup validation schema
const validationSchema = yup.object({
  paymentMethod: yup.string().required("Payment method is required"),
  shippingAddress: yup.object({
    details: yup.string().required("Address is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone number is not valid"),
    city: yup.string().required("City is required"),
  }),
});

export default function Checkout() {
  const navigate = useNavigate();

  async function handleOrder(values) {
    try {
      const response = await createOrder({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });
      if (response.success) {
        if (response.data.session) {
          toast.loading(
            "you will directed to stripe to complete payment process"
          );
        }
        setTimeout(() => {
          location.href = response.data.session.url;
        }, 3000);
      }
      toast.success("Your Orders has been created successfully");
      setCartInfo({
        numOfCartItems: 0,
        data: {
          products: [],
          totalCartPrice: 0,
        },
      });
      setTimeout(() => {
        navigate("/account/orders");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleOrder,
  });

  const { cartInfo, isLoading, setCartInfo } = useContext(CartContext);
  if (isLoading) {
    return <CheckoutSkeleton />;
  }
  const { cartId, data, numOfCartItems } = cartInfo;
  const { totalCartPrice, products } = data;
  return (
    <>
      <PageMetaData
        title="Checkout - Fresh Cart"
        description="Complete your purchase by providing payment and shipping details for your Fresh Cart order."
      />
      <section className="min-h-screen bg-gray-50">
        <div className="container max-w-6xl py-7 px-4 sm:px-6">
          <h1 className="text-2xl font-semibold mb-6 mx-3">Checkout</h1>
          <form
            className="grid lg:grid-cols-12 gap-8"
            onSubmit={formik.handleSubmit}
          >
            {/* ========== Payment Method ========== */}
            <div className="payment-method lg:col-span-8">
              <div className="payment-options bg-white shadow-sm p-4 sm:p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                <div className="space-y-6">
                  {/* COD Option */}
                  <label
                    htmlFor="cod"
                    className={`${
                      formik.values.paymentMethod === "cod" &&
                      "bg-primary-50  border-primary-500"
                    } flex gap-4 items-center border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors duration-200`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      id="cod"
                      className="size-4 accent-blue-700"
                      checked={formik.values.paymentMethod === "cod"}
                      onChange={formik.handleChange}
                    />
                    <div className="">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex justify-start items-center gap-4">
                          <FontAwesomeIcon
                            className="text-2xl text-primary-600"
                            icon={faMoneyBill1Wave}
                          />
                          <div>
                            <h3 className="font-semibold">Cash on Delivery</h3>
                            <p className="text-gray-600 text-sm">
                              Pay with cash upon delivery.
                            </p>
                          </div>
                        </div>

                        <span className="text-primary-600 text-sm sm:text-base">
                          No extra charges
                        </span>
                      </div>
                      {formik.values.paymentMethod === "cod" && (
                        <div className="px-3 py-2 mt-4 ml-0 sm:ml-10 flex gap-2 items-center text-primary-600 justify-center border border-primary-600/50 rounded-md">
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            className="p-2"
                          />
                          <p className="text-sm">
                            Please keep exact change ready for hassle-free
                            delivery
                          </p>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Online Payment Option */}
                  <label
                    htmlFor="online"
                    className={`${
                      formik.values.paymentMethod === "online" &&
                      "bg-primary-50  border-primary-500"
                    } flex gap-4 items-center border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors duration-200`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      id="online"
                      className="size-4 accent-blue-700"
                      checked={formik.values.paymentMethod === "online"}
                      onChange={formik.handleChange}
                    />
                    <div className="">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex justify-start items-center gap-4">
                          <FontAwesomeIcon
                            className="text-2xl text-primary-600"
                            icon={faCreditCard}
                          />
                          <div>
                            <h3 className="font-semibold">Online Payment</h3>
                            <p className="text-gray-600 text-sm">
                              Pay securely online with card or digital wallet.
                            </p>
                          </div>
                        </div>

                        <span className="text-primary-600 text-sm sm:text-base">
                          Recommended
                        </span>
                      </div>
                      {formik.values.paymentMethod === "online" && (
                        <div className="px-3 py-2 mt-4 ml-0 sm:ml-10 flex gap-2 items-center text-blue-600 justify-center border border-blue-600/50 bg-blue-600/10 rounded-md">
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            className="p-2"
                          />
                          <p className="text-sm">
                            Please keep your payment information ready for a
                            smooth checkout process.
                          </p>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Validation Error for Payment Method */}
                  {formik.touched.paymentMethod &&
                    formik.errors.paymentMethod && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.paymentMethod}
                      </p>
                    )}
                </div>
              </div>

              {/* ========== Shipping Address ========== */}
              <div className="shipping-address bg-white shadow-sm p-4 sm:p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="address flex flex-col gap-2">
                  <label htmlFor="addressDetails" className="text-sm">
                    Address Details *
                  </label>
                  <textarea
                    placeholder="Enter Your full Address Details"
                    id="addressDetails"
                    className="form-control w-full min-h-28 max-h-40 border border-gray-300 rounded-md p-2"
                    name="shippingAddress.details"
                    value={formik.values.shippingAddress.details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.shippingAddress?.details &&
                    formik.errors.shippingAddress?.details && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.shippingAddress.details}
                      </p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {/* Phone */}
                  <div className="phone flex flex-col gap-2 sm:w-1/2">
                    <label htmlFor="phoneNumber" className="text-sm">
                      Phone Number *
                    </label>
                    <input
                      className="form-control border border-gray-300 rounded-md p-2"
                      type="tel"
                      id="phoneNumber"
                      placeholder="01012345678"
                      name="shippingAddress.phone"
                      value={formik.values.shippingAddress.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.shippingAddress?.phone &&
                      formik.errors.shippingAddress?.phone && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.shippingAddress.phone}
                        </p>
                      )}
                  </div>

                  {/* City */}
                  <div className="city flex flex-col gap-2 sm:w-1/2">
                    <label htmlFor="city" className="text-sm">
                      City *
                    </label>
                    <input
                      className="form-control border border-gray-300 rounded-md p-2"
                      type="text"
                      id="city"
                      placeholder="Cairo"
                      name="shippingAddress.city"
                      value={formik.values.shippingAddress.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.shippingAddress?.city &&
                      formik.errors.shippingAddress?.city && (
                        <p className="text-red-500 text-sm">
                          {formik.errors.shippingAddress.city}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>

            {/* ========== Order Summary ========== */}
            <div className="order-summary max-h-fit bg-white shadow-sm p-4 sm:p-6 rounded-lg lg:col-span-4 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 cart-items max-h-48 overflow-auto p-3">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="item-info flex justify-between items-center"
                  >
                    <Link
                      to={`/product/${product.product.id}`}
                      className="flex items-center gap-1"
                    >
                      <img
                        src={product.product.imageCover}
                        className="w-16 h-16 object-cover"
                        alt=""
                      />
                      <div className="details">
                        <h3 className="text-black text-sm line-clamp-1">
                          {product.product.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          Qty:{product.count}
                        </p>
                      </div>
                    </Link>
                    <div>
                      <span>{product.price}EGB</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="summary-detail space-y-2 mt-6">
                  <div className="detail flex justify-between">
                    <span className="text-gray-500 font-semibold">
                      Subtotal
                    </span>
                    <span className="text-black font-semibold">
                      {" "}
                      {totalCartPrice} EGB
                    </span>
                  </div>
                  <div className="detail flex justify-between">
                    <span className="text-gray-500 font-semibold">
                      Delivery
                    </span>
                    <span className="text-black font-semibold">70 EGB</span>
                  </div>
                  <div className="detail flex justify-between">
                    <span className="text-gray-500 font-semibold">Tax</span>
                    <span className="text-black font-semibold">
                      {" "}
                      {Math.trunc(totalCartPrice * 0.14)} EGB
                    </span>
                  </div>
                  <div className="detail total flex justify-between border-t py-2 border-gray-400/30 text-black font-semibold">
                    <span>Total</span>
                    <span>
                      {totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14)}{" "}
                      EGB
                    </span>
                  </div>
                </div>

                <div className="btns flex flex-col justify-center items-center space-y-3 my-4">
                  <button
                    type="submit"
                    className="btn w-full bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-white py-2 rounded-md flex items-center justify-center gap-2"
                  >
                    Proceed to Payment <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <Link
                    to="/cart"
                    className="btn text-center w-full bg-transparent border border-gray-300 hover:border-primary-600 transition-colors duration-200 py-2 rounded-md flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} /> Previous Step
                  </Link>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon className="text-primary-600" icon={faLock} />
                  <p className="text-gray-500 font-semibold text-sm">
                    Your payment information is secure with us.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
