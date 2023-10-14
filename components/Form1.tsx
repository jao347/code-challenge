"use client"
import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar';
import {HiArrowRight} from 'react-icons/hi'

const Form1 = ({nextStep, stepData} : any) => {

  const [error, seterror] = useState(false)
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(selectedOption && selectedOption2){
        const selectedOptions = {
            option1: selectedOption,
            option2: selectedOption2,
          };
        nextStep(selectedOptions);
        seterror(false)
    }
    else{
        seterror(true)
    }
    
   
   
  }

  const [selectedOption, setSelectedOption] = useState(stepData.option1 || '');
  const [selectedOption2, setSelectedOption2] = useState(stepData.option2 || '');

  const handleOptionChange = (e:any) => {
    setSelectedOption(e.target.value);
  };

  const handleOptionChange2 = (e:any) => {
    setSelectedOption2(e.target.value);
  };



    const options1 = [
    { value: 'Before 1953', label: 'Before 1953' },
    { value: '1953-1987', label: '1953-1987' },
    { value: 'After 1987', label: 'After 1987' },
    { value: 'No exposure', label: 'No exposure' },
    ];

    const options2 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        
        <small className='font-bold text-gray-500'>STEP 1 - 3</small>
        <h1 className='font-bold text-gray-600'>General Information</h1>
        <ProgressBar step={1} totalSteps={3} />
        <h1 className='font-bold text-gray-600 mt-2 text-[15px]'>When did you live, work, or spend time at Camp Lejuene?</h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 mb-4">
        {options1.map((option) => (
          <label key={option.value} className='bg-white p-3 rounded-md shadow-sm flex justify-start items-center gap-2'>
            <input
              type="radio"
              name="options1"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              className='bg-white p-3 rounded-md shadow-sm '
            />
            <span className='text-[12px] text-gray-500 font-semibold'>{option.label}</span>
          </label>
        ))}
        </div>
        <h1 className='font-bold text-gray-600 mt-2 text-[15px]'>Have you retained an attorney for Camp Lejuene water contamination?</h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 mb-4">
        {options2.map((option) => (
          <label key={option.value} className='bg-white p-3 rounded-md shadow-sm flex justify-start items-center gap-2'>
            <input
              type="radio"
              name="options2"
              value={option.value}
              checked={selectedOption2 === option.value}
              onChange={handleOptionChange2}
              className='bg-white p-3 rounded-md shadow-sm '
            />
            <span className='text-[12px] text-gray-500 font-semibold'>{option.label}</span>
          </label>
        ))}
        
        </div>
        

        <button type="submit" className="bg-[#b9bfc7] hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-3">
            Next <HiArrowRight size={'20px'}/>
        </button>
        {error && <small className='font-bold text-red-500 mt-2'>Please supply answers to the following questions.</small>}
      </div>
    </form>

  )
}

export default Form1