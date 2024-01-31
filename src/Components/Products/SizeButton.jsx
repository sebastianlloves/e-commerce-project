import React from 'react'

const SizeButton = ({ size, sizeSelected, handleClick }) => {
 return (
   <div>
     <button
       className={`m-3 h-14 min-w-[3.5rem] rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-gray-600 shadow-azure-300 transition-all duration-300 active:-translate-y-0.5 ${
         sizeSelected === size.name
           ? "scale-110 border-azure-600 shadow-md shadow-azure-700/50"
           : "shadow-sm"
       }`}
       onClick={handleClick}
     >
       {size.name}
     </button>
   </div>
 );
};

export default SizeButton;