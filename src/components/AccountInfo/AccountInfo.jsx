 import React, { useContext, useEffect, useState } from 'react'
 import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../Context/Auth.context';
import { getUserInfo } from '../../services/Account-services';
import Loading from './../Loading/Loading';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { changePassword } from '../../services/auth-service';
import *  as yup from 'yup';
import { toast } from 'react-toastify';
import AccountInfoSkeleton from '../skeleton/AccountInfoSkeleton';
import AccountLayoutSkeleton from '../skeleton/AccountLayoutSkeleton';
import PageMetaData from '../PageMetaData/PageMetaData';
export default function AccountInfo() {
   const {isUserInfo} =  useContext(AuthContext)
   const {id} = isUserInfo;
   const [isLoading , setLoading] = useState(true)
   const [changepassword, SetChangePassword] = useState(false)
   const [User , SetUser] = useState(null)
   const [error, setError] = useState(null);
    const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  
  function toggleChangePassword() {
   return SetChangePassword(!changepassword);
  }
   const validationSchema = yup.object({
    currentPassword: yup
      .string()
      .required("current password is required")
      .matches(
        passwordRegex,
        "password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
    password: yup
      .string()
      .required("new password is required")
      .matches(
        passwordRegex,
        "password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
    rePassword: yup
      .string()
      .required("confirm password is required")
      .oneOf([yup.ref("password")], "confirm password is invalid"),
  });

  async function handleChangePassword(values) {
    try {
      const response = await changePassword(values)
      if(response.success) {
        toast.success("password Changed Successfully");
        SetChangePassword(false)
      }
      
    } catch (error) {
      setError("current password is invalid");
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      currentPassword:"",
    password:"",
    rePassword:""
    },
    validationSchema,
    onSubmit:handleChangePassword,
  })

   async function handleUserInfo() {
       try {
        setLoading(true)
         const response = await getUserInfo(id)
         if(response.success) {
           setLoading(false)
           SetUser(response.data)
         }
       } catch (error) {
        setLoading(false)
         console.log(error)
       }
   }

  

  
   useEffect(()=>{
    handleUserInfo()
   } , [id])
   
 if(isLoading) {
    return <>
  
    <AccountInfoSkeleton/>
    </>
 }

   return (
     <>
     <PageMetaData title="Account Information - Fresh Cart" description="Manage your account information and change your password."/>
      <section className=' p-10 space-y-5 rounded-md shadow-md max-w-[900px]'>
        <div className='flex items-center gap-4'>
          <div className="bg-primary-100 ring-primary-50 flex size-12 items-center justify-center rounded-full shadow-sm ring-4">
            <FontAwesomeIcon
              className="text-primary-600 text-xl"
              icon={faUser}
            />
          </div>
            <h2 className='font-semibold text-xl text-black'>Account Information</h2>
        </div>
        <div className='space-y-4'>
           <div className="name flex flex-col" >
             <label htmlFor="fullName" id='FullName' className='font-semibold mb-2'>Full Name</label>
            <input 
             type="text"
             name="fullName"
              id="fullName"
              className='form-control w-full'
              value={User.data.name}
              disabled={true}
               /> 
           </div>

             <div className="email flex flex-col" >
             <label htmlFor="email" id='email' className='font-semibold mb-2'>Email</label>
            <input 
             type="email"
             name="email"
              id="email"
              className='form-control w-full'
              value={User.data.email}
              disabled={true}
               /> 
           </div>
             <div className="phone flex flex-col" >
             <label htmlFor="phone" id='phone' className='font-semibold mb-2'>Phone</label>
            <input 
             type="tel"
             name="phone"
              id="phone"
              className='form-control w-full'
              value={User.data.phone}
              disabled={true}
               /> 
           </div>
           
        </div>

       <div className='border-t-2 border-gray-200 py-5'>
         <button 
         onClick={toggleChangePassword}
         className='btn text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200 cursor-pointer '>
            Change Password
        </button>
       </div>

       {/* overlay */}
       {changepassword && (
        <>
        <div onClick={toggleChangePassword}
        className='inset-0 fixed bg-gray-900/50 backdrop-blur-sm top-0 right-0 left-0 bottom-0'
        > </div>
        {/* Pop container */}
         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-xl w-full max-w-md'>
          <div className="header flex justify-between items-center">
            <h1 className='text-xl font-bold text-primary-500 mb-3' >Change Password</h1>
             <FontAwesomeIcon className='cursor-pointer hover:-translate-y-1 transition-all duration-200' icon={faXmark} onClick={toggleChangePassword}/>
          </div>
       
            <form action="" className='space-y-3' onSubmit={formik.handleSubmit}>
              <div >
              <label htmlFor="CurrentPassword" id='CurrentPassword' className='text-sm font-bold'>Current Password</label>
            <input 
            type="password"
            id='CurrentPassword'
            className='form-control w-full'
            placeholder='enter your current password'
            value={formik.values.currentPassword}
            name='currentPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.currentPassword &&
                  formik.errors.currentPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      *{formik.errors.currentPassword}
                    </p>
                  )}
                       {error && <p className="mt-1 text-sm text-red-500">*{error}</p>}
           </div>

            <div >
              <label htmlFor="NewPassword" id='NewPassword' className='text-sm font-bold'>New Password</label>
            <input 
            type="password"
            id='NewPassword'
            className='form-control w-full'
            placeholder='enter your new password'
            value={formik.values.password}
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
             {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    *{formik.errors.password}
                  </p>
                )}
           </div>

            <div>
              <label htmlFor="ConfirmPassword" id='ConfirmPassword' className='text-sm font-bold'>Confirm New Password</label>
            <input type="password"
            id='ConfirmPassword'
            className='form-control w-full'
            placeholder='enter your current password'
            value={formik.values.rePassword}
            name='rePassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
             {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="mt-1 text-sm text-red-500">
                    *{formik.errors.rePassword}
                  </p>
                )}
           </div>

            <button 
            type="submit"
            className='btn bg-primary-500 hover:bg-primary-600 transition-colors duration-200 text-white w-full '>
              Change Password
             </button>
            </form>
          </div>
        </>
          
       ) }
      </section>
     </>
   )
 }
 