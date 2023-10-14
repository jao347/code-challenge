"use client"
import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar';
import {HiArrowRight, HiChevronLeft} from 'react-icons/hi'
import { useRouter } from 'next/navigation';

type UserData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: string;
    [key: string]: string; 
  };

const Form3 = ({prevStep, stepData}: any) => {
    const [error, setError] = useState(false);
    const [errorEmail, seterrorEmail] = useState(false);
    const [errorPhone, seterrorPhone] = useState(false);
    const router = useRouter();


    const [formData, setFormData] = useState<UserData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipcode: '',
      });
      const [checkboxChecked, setCheckboxChecked] = useState(false);

      const handleInputChange = (e: any) => {
        
        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          ...stepData.step1Data,
          ...stepData.step2Data,
          [name]: value,
        });

       
      };

      
  const handleCheckboxChange = (e: any) => {
    setCheckboxChecked(e.target.checked);
  };

  useEffect(() => {
    if(formData.phone) {
        validatePhone(formData.phone);
    }
    if(formData.email) {
        validateEmail(formData.email);
    }
    
    
  }, [formData])
  

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      seterrorEmail(true);
    } else {
      seterrorEmail(false);
    }
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+\d{1}\s\(\d{3}\)\s-\s\d{3}\s-\s\d{4}$/;

    if (!phoneRegex.test(phone)) {
      seterrorPhone(true);
    } else {
      seterrorPhone(false);
    }

  };

  const searchParams = new URLSearchParams();

    for (const key in formData) {
      searchParams.append(key, formData[key]);
    }
    
  
    const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (checkboxChecked) {
        
        if(!errorPhone && !errorEmail){
            router.push(`thankyou?${searchParams.toString()}`)
        }
        else{
            setError(true)
        }   
      } else {
       setError(true)
      }
    };

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <HiChevronLeft size={'24px'} onClick={prevStep} />
        <small className='font-bold text-gray-500 ml-1 text-[11px]'> STEP  3 - 3</small>
      </div>
      <h1 className='font-bold text-gray-700'>Your Information</h1>
      <ProgressBar step={3} totalSteps={3} />
      <h1 className='font-bold text-gray-600 mt-2 text-[15px]'>Please fill out all fields</h1>
      <div className="grid lg:grid-cols-2 gap-x-6 gap-y-4 mt-4 mb-4">
        <div className="w-full">
          <label htmlFor="first_name" className="block mb-2 text-sm text-gray-600 font-bold">First name</label>
          <input type="input" id="first_name" name="firstName" value={formData.firstName} onChange={handleInputChange} className="p-2 w-full rounded-md focus:ring-blue-500 shadow-sm" placeholder='First Name' required />
        </div>
        <div className="w-full">
          <label htmlFor="last_name" className="block mb-2 text-sm text-gray-600 font-bold">Last name</label>
          <input type="input" id="last_name" name="lastName" value={formData.lastName} onChange={handleInputChange} className="p-2 w-full rounded-md focus:ring-blue-500 shadow-sm" placeholder='Last Name' required />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 font-bold">Email address</label>
        <input type="input" id="email" name="email" value={formData.email} onChange={handleInputChange} className="p-2 w-full rounded-md focus:ring-blue-500 shadow-sm" placeholder='test@gmail.com' required />
        {errorEmail && <small className='text-red-500'>Invalid Email</small>}
      </div>
      <div className="grid lg:grid-cols-2 gap-x-6 gap-y-4 mt-4 mb-4">
        <div className="w-full">
          <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 font-bold">Phone</label>
          <input type="input" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="p-2 w-full rounded-md focus:ring-blue-500 shadow-sm" placeholder='+1 (111) - 111 - 1111' autoComplete="off" required />
          {errorPhone && <small className='text-red-500'>Invalid Phone Number</small>}
        </div>
        <div className="w-full">
          <label htmlFor="zipcode" className="block mb-2 text-sm text-gray-600 font-bold">Zip code</label>
          <input type="input" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleInputChange} className="p-2 w-full rounded-md focus:ring-blue-500 shadow-sm" placeholder='Zip code' required />
        </div>
      </div>
      <p className='text-[13px] lg:inline flex font-bold mb-4'>
        <input type="checkbox" className='mr-3' checked={checkboxChecked} onChange={handleCheckboxChange} />
        <span className='lg:inline hidden'>
          By checking this box and clicking the &quot;AGREE AND SUBMIT&quot; button below, I represent that I am 18+ years of age and have read and agreed to the National Injury Bureau <a href="" className='text-blue-500'>Terms and Conditions</a> and <a href="" className='text-blue-500'>Privacy Policy</a>; I consent to the transfer of information that I provide on this site to third-party legal service providers and non-legal service providers, third party partners and their affiliates and service providers; I agree to be contacted by email & telephone, which may include artificial or pre-recorded calls and/or SMS text messages, delivered via automated technology, to the email and phone number that I have provided.
        </span>
        <span className='lg:hidden flex'>I agree the terms below.</span>
      </p>
      <button type="submit" className="bg-[#fbbf24] hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-3">
        AGREE AND SUBMIT <HiArrowRight size={'20px'} />
      </button>
      {error && <p className='text-red-500 mt-2 font-bold text-[12px]'>Please read and tick the checkbox to &quot;Agree and Submit&quot;</p>}
      <span className='lg:hidden inline text-[13px] font-bold mt-3'>
          By checking this box and clicking the &quot;AGREE AND SUBMIT&quot; button below, I represent that I am 18+ years of age and have read and agreed to the National Injury Bureau <a href="" className='text-blue-500'>Terms and Conditions</a> and <a href="" className='text-blue-500'>Privacy Policy</a>; I consent to the transfer of information that I provide on this site to third-party legal service providers and non-legal service providers, third party partners and their affiliates and service providers; I agree to be contacted by email & telephone, which may include artificial or pre-recorded calls and/or SMS text messages, delivered via automated technology, to the email and phone number that I have provided.
        </span>
    </div>
  </form>

  )
}

export default Form3