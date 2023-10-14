"use client"
import React, {useState} from 'react'
import { Form1, Form2, Form3 } from '.';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
  });
  

  const nextStep = (data : any) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        [`step${step}Data`]: data,
      }));
      setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  }

  const getStepData = (step: number) => {
    return (formData as any)[`step${step}Data`];
  };

  return (
    <div className='flex justify-center items-start h-full pb-5'>
       <div className="lg:w-[30%] w-full mt-1 px-6 lg:p-0">
       
        {step === 1 && <Form1 nextStep={nextStep}  stepData={getStepData(1)}/>}
        {step === 2 && <Form2 nextStep={nextStep} prevStep={prevStep} stepData={getStepData(2)}/>}
        {step === 3 && <Form3  prevStep={prevStep} stepData={formData}/>}
       </div>
    </div>
  )
}

export default Form