// import {
//   faShieldHalved,
//   faStar,
//   faTruckFast,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profileimage from "../../assets/Images/review-author.png";
// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { Link, useNavigate } from "react-router";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { useFormik, yupToFormErrors } from "formik";
// import axios from "axios";
// import * as yup from "yup";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import { sendDataToSiguUp } from "../../services/auth-service";
// import { CheckPasswordStrength } from "../../utils/validation";
// import PageMetaData from "../../components/PageMetaData/PageMetaData";

// export default function Signup() {
//   const [isExistError, setisExistError] = useState(null);
//   const navigate = useNavigate();

//   const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
//   const passwordRegex =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

//   const validationSchema = yup.object({
//     name: yup
//       .string()
//       .required("Name is required")
//       .min(3, "Name must be at least 3 characters")
//       .max(15, "Name must be at most 15 characters"),
//     email: yup
//       .string()
//       .required("Email is required")
//       .email("Invalid email format"),
//     phone: yup
//       .string()
//       .required("Phone is required")
//       .matches(phoneRegex, " We Accept Egyptian numbers only "),
//     password: yup
//       .string()
//       .required("Password is required")
//       .matches(
//         passwordRegex,
//         "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character"
//       ),
//     rePassword: yup
//       .string()
//       .required("Confirm Password is required")
//       .oneOf([yup.ref("password")], "Passwords should be the same"),
//     terms: yup
//       .boolean()
//       .oneOf([true], "You must accept the terms and conditions"),
//   });

//   async function handleSignup(values) {
//     try {
//       const response = await sendDataToSiguUp(values);
//       if (response.success) {
//         toast.success("Your Account has been created");
//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       }
//     } catch (error) {
//       setisExistError(error.message);
//     }
//   }

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       phone: "",
//       terms: false,
//     },
//     validationSchema,
//     onSubmit: handleSignup,
//   });

//   const PasswordStrength = CheckPasswordStrength(formik.values.password);

//   return (
//     <>
//       <PageMetaData
//         title="Sign Up - Fresh Cart"
//         description="Create a new Fresh Cart account to start shopping for fresh groceries."
//       />
//       <main className="py-12">
//         <div className="container grid lg:grid-cols-2 lg:gap-12">
//           {/* left side */}
//           <div className=" hidden lg:block  space-y-8 py-10">
//             <div className="welcome-msg">
//               <h2 className="text-4xl font-bold">
//                 Welcome to <span className="text-primary-500 ">FreshCart</span>
//               </h2>
//               <p className="text-lg  mt-2">
//                 Join thousands of happy customers who enjoy fresh groceries
//                 delivered <br></br>right to their doorstep.
//               </p>
//             </div>
//             <ul className="*:flex *:items-center *:gap-3 space-y-4">
//               <li>
//                 <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
//                   <FontAwesomeIcon icon={faStar} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Premium Quality</h3>
//                   <p className="text-gray-500">
//                     Premium Quality products Sourced from trusted suppliers
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
//                   <FontAwesomeIcon icon={faTruckFast} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Fast Delivery</h3>
//                   <p className="text-gray-500">
//                     Same-day delivery available in most areas
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
//                   <FontAwesomeIcon icon={faShieldHalved} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Source Shopping</h3>
//                   <p className="text-gray-500">
//                     Your data and payment information are completely secure with
//                     us.
//                   </p>
//                 </div>
//               </li>
//             </ul>
//             <div className="review  p-6 rounded-lg bg-white shadow-md space-y-2 ">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={profileimage}
//                   className="size-12 rounded-full"
//                   alt="Profile"
//                 />
//                 <div>
//                   <h4>Sarah Johnson</h4>
//                   <div className="rating *:text-yellow-400 ">
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} />
//                   </div>
//                 </div>
//               </div>
//               <blockquote className="text-gray-700 italic ">
//                 <p>
//                   "FreshCart has transformed my grocery shopping experience. The
//                   quality of the products is exceptional, and the convenience of
//                   having everything delivered to my doorstep saves me so much
//                   time. Highly recommend!"
//                 </p>
//               </blockquote>
//             </div>
//           </div>
//           {/* right side */}
//           <div className="bg-white shadow-xl rounded-xl p-10 space-y-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-semibold ">Create Your Account</h2>
//               <p className="mt-1">Start your journey with FreshCart today!</p>
//             </div>
//             <div className=" flex gap-2  *:flex *:items-center *:justify-center *:w-full *:gap-2 *:hover:bg-gray-100 *:transition:colors *:duration-300 flex-wrap ">
//               <button className="btn bg-transparent border border-gray-400/40 ">
//                 <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
//                 <span>Google</span>
//               </button>
//               <button className="btn bg-transparent border border-gray-400/40 ">
//                 <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
//                 <span>Facebook</span>
//               </button>
//             </div>
//             <div className=" relative w-full h-0.5 bg-gray-300/30">
//               <span className="absolute left-1/2 top-1/2 -translate-1/2 px-4 bg-white">
//                 or
//               </span>
//             </div>
//             <form className="space-y-7" onSubmit={formik.handleSubmit}>
//               <div className="name flex flex-col gap-1">
//                 <label htmlFor="name">Name*</label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Ali"
//                   className="form-control"
//                   name="name"
//                   onChange={formik.handleChange}
//                   value={formik.values.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.name && formik.errors.name ? (
//                   <div className="text-sm text-red-600">
//                     *{formik.errors.name}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="Email flex flex-col gap-1">
//                 <label htmlFor="email">Email*</label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="ali@example.com"
//                   className="form-control"
//                   name="email"
//                   onChange={formik.handleChange}
//                   value={formik.values.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-sm text-red-600">
//                     *{formik.errors.email}
//                   </div>
//                 ) : (
//                   ""
//                 )}

//                 {isExistError && (
//                   <p className="text-red-500"> *{isExistError}</p>
//                 )}
//               </div>

//               <div className="Password flex flex-col gap-1">
//                 <label htmlFor="password">Password*</label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="create a strong password"
//                   className="form-control"
//                   name="password"
//                   onChange={formik.handleChange}
//                   value={formik.values.password}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.password && formik.errors.password ? (
//                   <div className="text-sm text-red-600">
//                     *{formik.errors.password}
//                   </div>
//                 ) : (
//                   <p className="text-sm mt-2">
//                     Must be at least 8 characters with numbers and symbols
//                   </p>
//                 )}

//                 {formik.values.password && (
//                   <div className="password-strength flex items-center gap-3">
//                     <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200">
//                       <div
//                         className={`progress ${PasswordStrength.background} ${PasswordStrength.width}  h-full `}
//                       ></div>
//                     </div>
//                     <span className="text-nowrap w-28 text-center">{`${PasswordStrength.text}`}</span>
//                   </div>
//                 )}
//               </div>

//               <div className="rePassword flex flex-col gap-1">
//                 <label htmlFor="rePassword">Confirm Password*</label>
//                 <input
//                   type="password"
//                   id="repPassword"
//                   placeholder="confirm your password"
//                   className="form-control"
//                   name="rePassword"
//                   onChange={formik.handleChange}
//                   value={formik.values.rePassword}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.rePassword && formik.errors.rePassword ? (
//                   <div className="text-sm text-red-600">
//                     *{formik.errors.rePassword}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="phone flex flex-col gap-1">
//                 <label htmlFor="phone">Phone*</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   placeholder="123-456-7890"
//                   className="form-control"
//                   name="phone"
//                   onChange={formik.handleChange}
//                   value={formik.values.phone}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.phone && formik.errors.phone ? (
//                   <div className="text-sm text-red-600">
//                     *{formik.errors.phone}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="terms ">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     className="accent-primary-600 size-4 "
//                     name="terms"
//                     onChange={formik.handleChange}
//                     value={formik.values.terms}
//                     onBlur={formik.handleBlur}
//                   />

//                   <label htmlFor="terms">
//                     I agree to{" "}
//                     <Link to={`/terms`} className="text-primary-600 underline">
//                       Terms of Services
//                     </Link>{" "}
//                     and{" "}
//                     <Link
//                       to={`/privacy-policy`}
//                       className="text-primary-600 underline"
//                     >
//                       Privacy Policy
//                     </Link>
//                   </label>
//                 </div>
//                 {formik.touched.terms && formik.errors.terms ? (
//                   <div className="text-sm text-red-600 mt-2  ">
//                     *{formik.errors.terms}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="btn  w-full bg-primary-600 text-white flex justify-center items-center gap-2 hover:bg-primary-700 "
//               >
//                 <FontAwesomeIcon icon={faUserPlus} />
//                 <span>Create My Account</span>
//               </button>
//             </form>
//             <p className="text-center pt-8  border-t-2 border-gray-300/50">
//               Already have an account ?{" "}
//               <Link to={`/login`} className="text-primary-600 underline">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }




















import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileimage from "../../assets/Images/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useFormik, yupToFormErrors } from "formik";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { sendDataToSiguUp } from "../../services/auth-service";
import { CheckPasswordStrength } from "../../utils/validation";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Signup() {
  const [isExistError, setisExistError] = useState(null);
  const navigate = useNavigate();

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, " We Accept Egyptian numbers only "),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character"
      ),
    rePassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords should be the same"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  async function handleSignup(values) {
    try {
      const response = await sendDataToSiguUp(values);
      if (response.success) {
        toast.success("Your Account has been created");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setisExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  const PasswordStrength = CheckPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData
        title="Sign Up - Fresh Cart"
        description="Create a new Fresh Cart account to start shopping for fresh groceries."
      />
      <main className="min-h-screen py-4 md:py-12 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-12">
          {/* left side */}
          <div className="hidden lg:block space-y-8 py-10">
            <div className="welcome-msg">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary-500 ">FreshCart</span>
              </h2>
              <p className="text-lg mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered <br></br>right to their doorstep.
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-3 space-y-4">
              <li>
                <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-gray-500">
                    Premium Quality products Sourced from trusted suppliers
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-gray-500">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-300 flex items-center justify-center text-xl text-primary-600">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className="font-semibold">Source Shopping</h3>
                  <p className="text-gray-500">
                    Your data and payment information are completely secure with
                    us.
                  </p>
                </div>
              </li>
            </ul>
            <div className="review p-6 rounded-lg bg-white shadow-md space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src={profileimage}
                  className="size-12 rounded-full"
                  alt="Profile"
                />
                <div>
                  <h4>Sarah Johnson</h4>
                  <div className="rating *:text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                <p>
                  "FreshCart has transformed my grocery shopping experience. The
                  quality of the products is exceptional, and the convenience of
                  having everything delivered to my doorstep saves me so much
                  time. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>
          {/* right side */}
          <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 mx-auto w-full max-w-md lg:max-w-full">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold">Create Your Account</h2>
              <p className="mt-1 text-sm sm:text-base">Start your journey with FreshCart today!</p>
            </div>
           <div className=" flex gap-2  *:flex *:items-center *:justify-center *:w-full *:gap-2 *:hover:bg-gray-100 *:transition:colors *:duration-300 flex-wrap ">
             <button className="btn bg-transparent border border-gray-400/40 ">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                 <span>Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-400/40 ">
               <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
               <span>Facebook</span>
              </button>
            </div>
            <div className="relative w-full h-0.5 bg-gray-300/30">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-sm text-gray-500">
                or
              </span>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ali"
                  className="form-control text-sm p-2 md:p-3"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-red-600">
                    *{formik.errors.name}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="Email flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ali@example.com"
                  className="form-control text-sm p-2 md:p-3"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-600">
                    *{formik.errors.email}
                  </div>
                ) : (
                  ""
                )}

                {isExistError && (
                  <p className="text-red-500 text-xs">*{isExistError}</p>
                )}
              </div>

              <div className="Password flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium">Password*</label>
                <input
                  type="password"
                  id="password"
                  placeholder="create a strong password"
                  className="form-control text-sm p-2 md:p-3"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-red-600">
                    *{formik.errors.password}
                  </div>
                ) : (
                  <p className="text-xs mt-1 text-gray-500">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                )}

                {formik.values.password && (
                  <div className="password-strength flex items-center gap-2 mt-2">
                    <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200">
                      <div
                        className={`progress ${PasswordStrength.background} ${PasswordStrength.width} h-full`}
                      ></div>
                    </div>
                    <span className="text-nowrap w-20 text-center text-xs">{`${PasswordStrength.text}`}</span>
                  </div>
                )}
              </div>

              <div className="rePassword flex flex-col gap-1">
                <label htmlFor="rePassword" className="text-sm font-medium">Confirm Password*</label>
                <input
                  type="password"
                  id="repPassword"
                  placeholder="confirm your password"
                  className="form-control text-sm p-2 md:p-3"
                  name="rePassword"
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className="text-xs text-red-600">
                    *{formik.errors.rePassword}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-medium">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="123-456-7890"
                  className="form-control text-sm p-2 md:p-3"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-xs text-red-600">
                    *{formik.errors.phone}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="terms">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="accent-primary-600 size-4 mt-0.5 flex-shrink-0"
                    name="terms"
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to{" "}
                    <Link to={`/terms`} className="text-primary-600 underline">
                      Terms of Services
                    </Link>{" "}
                    and{" "}
                    <Link
                      to={`/privacy-policy`}
                      className="text-primary-600 underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="text-xs text-red-600 mt-1">
                    *{formik.errors.terms}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="btn w-full bg-primary-600 text-white flex justify-center items-center gap-2 hover:bg-primary-700 py-2 md:py-3 text-sm md:text-base font-medium"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="text-center pt-6 border-t border-gray-300/50 text-sm">
              Already have an account?{" "}
              <Link to={`/login`} className="text-primary-600 underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}