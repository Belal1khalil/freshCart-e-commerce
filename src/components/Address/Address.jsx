import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCity, faMapMarked, faMapMarkedAlt, faPhone, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from "yup"
import { addAddress, deleteAddress, getAddress } from '../../services/Address-services'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'
import AddressSkeleton from '../skeleton/AddressSkeleton'
import PageMetaData from '../PageMetaData/PageMetaData'

export default function Address() {
  const [address , SetAddress] = useState(false)
  const [userAddress , setUserAddress] = useState(null) ;
  const [isLoading , setIsloading] = useState(true)



function togglehandleAddAddress() {
    return SetAddress(!address);
} 

const validationSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .matches(/^[a-zA-Z\s]{4,}$/, "name must be at least 4 letters"),
    details: yup
      .string()
      .required("details is required")
      .matches(/^.{10,}$/, "details must be at least 10 characters"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(/^(\+2)?01[0125][0-9]{8}$/, "we accept only Egyptian numbers"),
    city: yup
      .string()
      .required("city is required")
      .matches(/^[a-zA-Z\s]{4,}$/, "city must be at least 4 letters"),
})


  
const formik = useFormik({
    initialValues:{
        name: "",
       details: "",
       phone: "",
       city: "",
    },
    validationSchema,
   onSubmit: handleAddAddress,
})


async function handleAddAddress(values) {
    try {
        const response = await addAddress(values)
       
        if(response.success) {
            toast.success(response.data.message);
            formik.values.name = "";
            formik.values.details = "";
            formik.values.phone = "";
            formik.values.city = "";
            setUserAddress(response.data.data)
            SetAddress(false)
        }
    } catch (error) {
        console.log(error)
    }
}


async function  handleGetAddress() {
    try {
        setIsloading(true)
        const response = await getAddress()
        setUserAddress(response.data.data)
        setIsloading(false)
    } catch (error) {
        setIsloading(false)
        console.log(error)
    }
}

async function handledeleteAddress(id) {
    try {
        const response = await deleteAddress(id)
        if(response.success) {
            toast.success(response.data.message)
            setUserAddress(response.data.data)
        }

    } catch (error) {
        console.log(error)
    }
}



useEffect(()=>{
 handleGetAddress()
},[])

if(isLoading) {
    return <AddressSkeleton/>
}

  return (
    <>
     <PageMetaData title="My Addresses - Fresh Cart" description="Manage your saved addresses."/>
     <section className=''>
         <div className="address bg-white shadow-xl rounded-lg py-8 px-4">
            <div className="header flex justify-between items-center  ">
                <h1 className='text-xl font-bold'>My Addresses</h1>
                <button
                onClick={togglehandleAddAddress}
                className='btn text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200'>
                     <FontAwesomeIcon icon={faPlus} className='me-2'/>
                    Add New Address
                </button>
            </div>
             {userAddress?.length===0 ?   <div className='flex flex-col justify-center items-center mt-10 space-y-4 border-2 col-span-full  py-12 px-10 border-gray-200 border-dashed rounded-md  '>
                <FontAwesomeIcon className='text-4xl mb-4 text-gray-500' icon={faMapMarked}/>
                  <h4 className='text-xl mb-2 font-semibold text-gray-500'>No Addresses Found</h4>
                  <span className=' text-center mb-4 text-gray-500 '>You haven't added any addresses yet. Add your first address to get started!</span>
             </div> :userAddress?.map((address)=>
              <div
              key={address._id}
              className=" rounded-xl border border-gray-200 bg-white mt-5 p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <FontAwesomeIcon icon={faMapMarked} className="text-sm" />
                  </span>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {address.name}
                  </h4>
                </div>
                <button
               
                  className="rounded-md p-1.5 text-gray-400 transition-colors hover:text-red-500"
                >
                  <FontAwesomeIcon
                  onClick={()=>{
                    handledeleteAddress(address._id)
                  }}
                  icon={faTrash} className="text-sm" />
                </button>
              </div>

              <div className="space-y-2 text-gray-600">
                <p className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="mt-1 text-sm text-green-600"
                  />
                  <span>{address.details}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm text-green-600"
                  />
                  <span>{address.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCity}
                    className="text-sm text-green-600"
                  />
                  <span>{address.city}</span>
                </p>
              </div>
            </div>
            )}
           
         </div>
         {address && (
            // overlay
            <>
            <div 
            onClick={togglehandleAddAddress}
            className='inset-0 fixed bg-gray-900/50 backdrop-blur-sm top-0 right-0 left-0 bottom-0 '>
            </div>
              <div className='  absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-white p-6 z-50 w-full max-w-xl rounded-lg '>
                  <div className="header   flex justify-between items-center">
                    <h3 className='text-primary-500 text-xl font-semibold' >
                       <FontAwesomeIcon icon={faMapMarked} className='me-2'/> 
                        Add New Address</h3>
                        <FontAwesomeIcon icon={faXmark} 
                        onClick={togglehandleAddAddress}
                        className='cursor-pointer hover:-translate-y-1 transition-all duration-100 hover:text-red-500'
                        />
                  </div>
                  <div className='mt-2'  onSubmit={formik.handleSubmit}>
                    <form action="" className='space-y-5'>
                        <div>
                            <label id="AddressName" htmlFor="Address Name" >
                            <FontAwesomeIcon icon={faUser} className='text-primary-600 me-2'/>
                            Address Name
                        </label>
                        <input 
                        type="text"
                         id="AddressName"
                         className='form-control w-full mt-2'
                         placeholder='e.g, Home , Office , etc.'
                         name="name"
                         value={formik.values.name}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                        />
                        { formik.touched.name && formik.errors.name && (
                            <p className='text-red-500 text-sm font-bold my-2'>* {formik.errors.name}</p>
                        )
                        }
                        </div>

                        <div>
                            <label htmlFor="AddressDetails" id='Address Details' >
                                <FontAwesomeIcon icon={faMapMarked} className='me-2 text-primary-600' />
                                 Address Details
                            </label>
                             <textarea
                                   className="max-h-32 mt-2 min-h-24 w-full rounded-lg border border-gray-200 px-4 py-3 transition-all duration-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                                   placeholder="Enter your detailed address"
                                   name="details"
                                   value={formik.values.details}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   >
                                   </textarea>
                                    { formik.touched.details && formik.errors.details && (
                                         <p className='text-red-500 text-sm font-bold my-2'>* {formik.errors.details}</p>
                                      )
                                  }
                        </div>

               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-2 text-green-600"
                      />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full  rounded-lg border border-gray-200 px-4 py-3 transition-all duration-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                     { formik.touched.phone && formik.errors.phone && (
                            <p className='text-red-500 text-sm font-bold my-2'>* {formik.errors.phone}</p>
                        )
                        }
                   
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">
                      <FontAwesomeIcon
                        icon={faCity}
                        className="mr-2 text-green-600"
                      />
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all duration-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Enter your city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                     { formik.touched.city && formik.errors.city && (
                            <p className='text-red-500 text-sm font-bold my-2'>* {formik.errors.city}</p>
                        )
                        }
                    
                  </div>
                </div>
                        <div className='flex justify-end gap-2 '>
                            <button
                             onClick={togglehandleAddAddress}
                            className='btn bg-gray-100 hover:bg-gray-200 transitions-colors duration-200'>Cancel
                            </button>
                            <button type="submit" className='btn  bg-primary-500 hover:bg-primary-700 transition-colors text-white duration-150'>
                                Add Address
                            </button>
                        </div>
                    </form>
                  </div>
              </div>
            </>
         )}
     </section>
    </>
  )
}
