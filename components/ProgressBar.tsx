import React from 'react';

const ProgressBar = ({ step, totalSteps }:any) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-white rounded-lg h-2 mt-2 mb-2">
      <div
        className="bg-blue-700 h-2 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
