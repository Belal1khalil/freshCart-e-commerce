import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { data, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import PageMetaData from './../../components/PageMetaData/PageMetaData';

export default function ForgetPassword() {
  const [isEmail, setIsEmail] = useState(null);
  const navigate = useNavigate();

  async function sendcodetoemail(values) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.statusMsg === "success") {
        localStorage.setItem("email", formik.values.email);
        toast.success(data.message);
        setTimeout(() => {
          navigate("/reset-password");
        }, 2000);
      }
    } catch (error) {
      setIsEmail(error.response.data.message);
    }
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: sendcodetoemail,
  });

  return (
  <>
   <PageMetaData title="Forgot Password - Fresh Cart" description="Reset your Fresh Cart account password by entering your email address." />
    <main className="py-12 bg-gray-50  flex items-center justify-center">
      <div className="container max-w-md bg-white py-10 px-8 shadow-xl rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-gray-500 mt-1">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="Email" className="text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="Email"
              placeholder="Enter your email"
              className="form-control "
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">*{formik.errors.email}</p>
            ) : (
              ""
            )}
            {isEmail && <p className="text-red-500">*{isEmail}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-primary-600 text-white hover:bg-primary-700 hover:transition-colors hover:duration-300 "
          >
            Reset Password
          </button>
        </form>
      </div>
    </main>
  </>
  );
}
