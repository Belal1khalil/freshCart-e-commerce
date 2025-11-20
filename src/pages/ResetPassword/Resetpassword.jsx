import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function ResetPassword() {
  const coderegex = /^[1-9]\d{5}$/;
  const [isresetcode, SetisResetCode] = useState(null);
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
        toast.success(data.message);
      }
    } catch (error) {
      // setIsEmail(error.response.data.message)
    }
  }
  /////////////
  async function codeFromEmail(values) {
    try {
      const options = {
        method: "POST",
        url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.status === "Success") {
        toast.success("Reset code is right");
        setTimeout(() => {
          navigate("/reset");
        }, 2000);
      }
      console.log(data);
    } catch (error) {
      SetisResetCode(error.response.data.message);
    }
  }

  const validationSchema = yup.object({
    resetCode: yup
      .string()
      .required("Reset code is required")
      .matches(coderegex, "code at most 6 numbers"),
  });

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: codeFromEmail,
  });

  return (
    <>
      <PageMetaData title="Reset Password - Fresh Cart" description="Enter the reset code sent to your email to reset your Fresh Cart account password." />
      <main className="py-12 bg-gray-50  flex items-center justify-center">
        <div className="container max-w-lg bg-white py-10 px-8 shadow-xl rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {" "}
              Password Reset
            </h2>
            <p className="text-gray-500 mt-1">
              we wil send code to{" "}
              <span className="text-black font-semibold">{`${localStorage.getItem(
                "email"
              )}`}</span>{" "}
            </p>
          </div>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="text"
                className="text-gray-700 font-semibold mb-1"
              >
                Code
              </label>
              <input
                type="text"
                id="text"
                placeholder="Enter code"
                className="form-control "
                required
                name="resetCode"
                value={formik.values.resetCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.resetCode && formik.errors.resetCode ? (
                <p className="text-red-500">*{formik.errors.resetCode}</p>
              ) : (
                ""
              )}
              {isresetcode && <p className="text-red-500">*{isresetcode}</p>}
            </div>
            <span
              className="text-primary-600 text-sm flex justify-end items-center underline cursor-pointer"
              onClick={() =>
                sendcodetoemail({ email: localStorage.getItem("email") })
              }
            >
              send another code
            </span>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-primary-600 text-white hover:bg-primary-700 hover:transition-colors hover:duration-300 "
            >
              Continue
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
