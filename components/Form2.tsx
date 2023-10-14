"use client"
import React, {useState,useEffect} from 'react'
import ProgressBar from './ProgressBar';
import {HiArrowRight, HiChevronLeft} from 'react-icons/hi'

const Form2 = ({nextStep, prevStep, stepData}: any ) => {
    const [error, seterror] = useState(false)
    const [selectedOption1, setSelectedOption1] = useState(stepData.option3 || '');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(selectedOption1)
        {
            const updatedData = {
                ...stepData,
                option3: selectedOption1
            }
            nextStep(updatedData);
            seterror(false)
        }
        else{
            seterror(true)
        }
      };

    useEffect(() => {
      if(selectedOption1){
        seterror(false)
      }
    }, [selectedOption1])
    
    
    const handleOptionChange = (e:any) => {
        setSelectedOption1(e.target.value);
      };
    const options1 = [
        { value: 'Aplastic Anemia', label: 'Aplastic Anemia' },
        { value: 'Bladder Cancer', label: 'Bladder Cancer' },
        { value: 'Colon Cancer', label: 'Colon Cancer' },
        { value: 'End Stage Renal Disease', label: 'End Stage Renal Disease' },
        { value: 'Esophageal Cancer', label: 'Esophageal Cancer' },
        { value: 'Hepatic Steatosis', label: 'Hepatic Steatosis' },
        { value: 'Kidney Cancer', label: 'Kidney Cancer' },
        { value: 'Kidney Disease', label: 'Kidney Disease' },
        { value: 'Leukemia', label: 'Leukemia' },
        { value: 'Liver Cancer', label: 'Liver Cancer' },
        { value: 'Lung Cancer', label: 'Lung Cancer' },
        { value: 'Male Breast Cancer', label: 'Male Breast Cancer' },
        { value: 'Multiple Myeloma', label: 'Multiple Myeloma' },
        { value: "Non-Hodgkin's Lymphoma ", label: "Non-Hodgkin's Lymphoma " },
        { value: 'Other Myelodysplastic Syndrome', label: 'Other Myelodysplastic Syndrome' },
        { value: "Parkinson's Disease", label: "Parkinson's Disease" },
        { value: 'Renal Toxicity', label: 'Renal Toxicity' },
        { value: 'Systemic Scieroderma', label: 'Systemic Scieroderma' },
        { value: 'Systemic Scierosis', label: 'Systemic Scierosis' },
        { value: 'Other Serious Medical Condition', label: 'Other Serious Medical Condition' },
        { value: 'No Illness', label: 'No Illness' },
    ];

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
        <div className="flex flex-row items-center">
            <HiChevronLeft size={'24px'} onClick={prevStep}/><small className='font-bold text-gray-500 ml-1 text-[11px]'> STEP  2 - 3</small>
        </div>
        <h1 className='font-bold text-gray-700'>Illness Information</h1>
        <ProgressBar step={2} totalSteps={3} />
        <h1 className='font-bold text-gray-600 mt-2 text-[15px]'>Have you or a loved one been diagnosed with any of the following?</h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 mb-4">
        {options1.map((option) => (
          <label  key={option.value} className='bg-white p-3 rounded-md shadow-sm flex justify-start items-center gap-2'>
            <input
             type="radio"
             name="options1"
             value={option.value}
             checked={selectedOption1 === option.value}
            onChange={handleOptionChange}
             className='bg-white p-3 rounded-md shadow-sm '
            />
             <span className='text-[12px] text-gray-500 font-semibold'>{option.label}</span>
          </label>
        ))}
        </div>
        
        <button type="submit" className="bg-[#fbbf24] hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-3">
            Next <HiArrowRight size={'20px'}/>
        </button>
        {error && <small className='font-bold text-red-500 mt-2'>Please supply answers to the following questions.</small>}
        </div>
  </form>
  )
}

export default Form2