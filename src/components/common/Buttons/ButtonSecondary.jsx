import React from 'react';

const ButtonSecondary = ({ label }) => {
  return (
    <button
      className="flex px-4 py-[14px] justify-center items-center self-stretch w-fit min-w-[140px] 
         rounded-md border border-white/15 no-underline text-center 
          text-[14px] not-italic font-semibold leading-none 
         text-white/70 bg-white/5 transition-all duration-700 ease-in-out"
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
