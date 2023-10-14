"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Thankyou = () => {

  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');
  const zipcode = searchParams.get('zipcode');
  const option1 = searchParams.get('option1');
  const option2 = searchParams.get('option2');
  const option3 = searchParams.get('option3');

  const userData = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    phone : phone,
    zipcode : zipcode,
    option1 : option1,
    option2 : option2,
    option3 : option3
  }



  

  return (
    <div className='flex justify-center items-start h-full pb-5'>
       <div className="lg:w-[30%] w-full mt-1 px-6 lg:p-0">
        <div className="flex flex-col">
            <h5 className='text-center text-6xl font-extrabold'>Thank You!</h5>
            <h5 className='font-bold mt-4 border-b-4'>User Details</h5>
            <label htmlFor="" className='font-bold text-[13px] mt-4'>First name:</label>
            <p className='font-bold'>{userData.firstName}</p>
            <label htmlFor="" className='font-bold text-[13px] mt-2'>Last name:</label>
            <p className='font-bold'>{userData.lastName}</p>
            <label htmlFor="" className='font-bold text-[13px] mt-2'>Email address:</label>
            <p className='font-bold'>{userData.email}</p>
            <label htmlFor="" className='font-bold text-[13px] mt-2'>Phone:</label>
            <p className='font-bold'>{userData.phone}</p>
            <label htmlFor="" className='font-bold text-[13px] mt-2'>Zipcode:</label>
            <p className='font-bold'>{userData.zipcode}</p>
        </div>
        <div className="flex flex-col">
            <h5 className='font-bold mt-4 border-b-4'>General Information</h5>
            <label htmlFor="" className='font-bold text-[13px] mt-4'>When did you live, work, or spend time at Camp Lejuene?</label>
            <p className='font-bold'>{userData.option1}</p>
            <label htmlFor="" className='font-bold text-[13px] mt-2'>Have you retained an attorney for Camp Lejuene water contamination?</label>
            <p className='font-bold'>{userData.option2}</p>
        </div>
        <div className="flex flex-col">
            <h5 className='font-bold mt-4 border-b-4'>Illness Information</h5>
            <label htmlFor="" className='font-bold text-[13px] mt-4'>Have you or a loved one been diagnosed with any of the following?</label>
            <p className='font-bold'>{userData.option3}</p>
        </div>
        <Link href={'/'}>
            <button className='bg-green-500 w-full mt-5 p-3 rounded-md font-extrabold shadow-md text-white'>Home</button>
        </Link>
       </div>
    </div>
  )
}

export default Thankyou