import axios from 'axios';
import { useFormik } from 'formik'
import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import PageMetaData from '../../components/PageMetaData/PageMetaData';

export default function ReseetPassword() {
  const [isemailexist , setIsEmailExist] = useState(null);
   const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  
  async function resetpassword(values) {
        try {
           const options= {
      method:"PUT",
      url:"https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      data: values,
    }
    const {data} = await axios.request(options);
  
        } catch (error) {
           setIsEmailExist(error.response.data.message)
        }
   }

   const validationSchema = yup.object({
      email:yup.string().required("Email is required").email("Invalid email format"),
      newPassword:yup.string().required("Password is required").matches(passwordRegex, "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character"),
 })

  const formik = useFormik({
    initialValues: {
      email:"",
      newPassword:"",
    },
    validationSchema,
    onSubmit:resetpassword,
  })





  return (
     <>
      <PageMetaData title="Reset Password - Fresh Cart" description="Enter the reset code sent to your email to reset your Fresh Cart account password." />
     <main className="py-12 bg-gray-50  flex items-center justify-center">
  <div className="container max-w-lg bg-white py-10 px-8 shadow-xl rounded-lg">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">  Set New Password </h2>
      <p className="text-gray-500 mt-1">Must be at least 8 characters. </p>
    </div>

    <form className="space-y-6"  onSubmit={formik.handleSubmit}>
      {/* Email Field */}
      <div className="flex flex-col email">
        <label
          htmlFor="email"
          className="text-gray-700 font-semibold mb-1"
        
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="form-control "
          required
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.email && formik.errors.email ? (
              <p className='text-red-500'> * {formik.errors.email}</p>
          ):""
        }
         
         {
          isemailexist && <p className='text-red-500'>* {isemailexist}</p>
         }


      </div>
        {/* Password Field */}
       <div className="flex flex-col password">
        <label
          htmlFor="password"
          className="text-gray-700 font-semibold mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="new Password"
          className="form-control "
          required
          name='newPassword'
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         {
          formik.touched.newPassword && formik.errors.newPassword ? (
              <p className='text-red-500'> * new {formik.errors.newPassword}</p>
          ):""
        }
      </div>
      

      {/* Submit Button */}
      <button
        type="submit"
        className="btn w-full bg-primary-600 text-white hover:bg-primary-700 hover:transition-colors hover:duration-300 "
      >
        Reset Password
      </button>
    </form>
      <span className='flex justify-center items-center mt-4 text-primary-600 hover:underline'>
        <Link to={`/login`}>Back to login </Link>
      </span>
  </div>
</main>
     </>
  )
}
