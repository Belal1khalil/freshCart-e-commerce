import {
  faClock,
  faLock,
  faPeopleGroup,
  faShieldHalved,
  faStar,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/Images/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { sendDataToLogin } from "../../services/auth-service";
import { AuthContext } from "../../components/Context/Auth.context";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Login() {
  const location = useLocation();
  const from = location?.state?.from || "/";
  const navigate = useNavigate();

  const [isExistError, setIsExistError] = useState(null);
  const { setToken } = useContext(AuthContext);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  async function handlelogin(values) {
    try {
      const response = await sendDataToLogin(values);

      if (response.success) {
        toast.success(`Hello ${response?.data?.user?.name}`);
        setToken(response.data.token);

        if (values.rememberMe) {
          localStorage.setItem("userToken", response.data.token);
        } else {
          sessionStorage.setItem("userToken", response.data.token);
        }

        setTimeout(() => {
          navigate(from);
        }, 2000);

        localStorage.setItem("username", response?.user?.name);
        localStorage.setItem("email", response?.user?.email);
      }
    } catch (error) {
      setIsExistError(error.message);
    }
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: handlelogin,
  });

  return (
    <>
      {" "}
      <PageMetaData
        title="Login - Fresh Cart"
        description="Login to your Fresh Cart account to continue shopping."
      />
      <main className="py-8 overflow-x-hidden">
        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[100px]">
          {/* Left Section - Hidden on mobile */}
          <div className="hidden lg:flex flex-col justify-center items-center space-y-5">
            <img
              src={image}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
              alt=""
            />

            <h2 className="text-3xl font-semibold text-black/80">
              Fresh Groceries Delivered
            </h2>
            <p className="text-gray-500 text-sm text-center">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>

            <div className="flex justify-center items-center gap-5 text-sm *:flex *:justify-center *:items-center *:gap-1">
              <div>
                <FontAwesomeIcon
                  className="text-primary-600"
                  icon={faTruckFast}
                />
                <span>Free Delivery</span>
              </div>

              <div>
                <FontAwesomeIcon
                  className="text-primary-600"
                  icon={faShieldHalved}
                />
                <span>Secure Payment</span>
              </div>

              <div>
                <FontAwesomeIcon className="text-primary-600" icon={faClock} />
                <span>Fast Service</span>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="space-y-4 bg-white shadow-xl p-4 sm:p-6 lg:p-12 rounded-lg">
            <div className="title text-center space-y-2">
              <h2 className="font-bold text-black text-3xl">
                <span className="text-primary-600">Fresh</span>Cart
              </h2>
              <p className="text-xl font-bold text-black">Welcome Back!</p>
            </div>

            <p className="text-center text-gray-500">
              Sign in to continue your fresh shopping experience
            </p>

            {/* Social Buttons */}
            <div className="w-full mx-auto flex flex-col gap-2 *:bg-transparent *:border-1 *:border-gray-200 *:flex *:justify-center *:items-center *:gap-3">
              <button className="btn hover:bg-gray-400/50">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                Continue with Google
              </button>

              <button className="btn hover:bg-gray-400/50">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                Continue with Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="relative w-full h-0.5 bg-gray-300/30 mx-auto mt-6">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            {/* Form */}
            <form
              className="space-y-5 px-2 sm:px-4"
              onSubmit={formik.handleSubmit}
            >
              {/* Email Input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-semibold text-black/70">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">*{formik.errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="Password"
                    className="font-semibold text-black/70"
                  >
                    Password
                  </label>
                  <Link
                    to={"/forget-password"}
                    className="text-primary-600 underline"
                  >
                    Forget Password
                  </Link>
                </div>

                <input
                  className="form-control"
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500">*{formik.errors.password}</p>
                )}

                {isExistError && (
                  <p className="text-red-500">*{isExistError}</p>
                )}
              </div>

              {/* Stay Signed In */}
              <div className="flex justify-start items-center gap-2">
                <input
                  type="checkbox"
                  id="signed-in"
                  className="accent-primary-600 size-4"
                  name="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <label htmlFor="signed-in">Keep me signed in</label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-full bg-primary-600 text-white hover:bg-primary-700 duration-200"
              >
                Sign In
              </button>
            </form>

            {/* Footer Links */}
            <p className="text-center text-gray-400 border-t border-gray-300/50 py-4 mt-5">
              New to FreshCart?{" "}
              <Link
                to={`/signup`}
                className="text-primary-600 font-semibold underline"
              >
                Create an account
              </Link>
            </p>

            {/* Small Footer Icons */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-gray-400 text-sm *:flex *:items-center *:gap-1">
              <div>
                <FontAwesomeIcon icon={faLock} />
                <span>SSL Secured</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <span>50k+ users</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
