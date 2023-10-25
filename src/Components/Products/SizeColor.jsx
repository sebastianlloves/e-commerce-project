import React from 'react'

const SizeColor = ({ size, sizeSelected, handleClick }) => {
 return (
   <div>
     <button
       className={`m-3 h-14 min-w-[3.5rem] rounded-md border border-gray-300 bg-slate-50 px-4 text-sm font-medium text-gray-600 shadow-indigo-300 duration-300 active:-translate-y-0.5 ${
         sizeSelected === size.name
           ? "scale-110 border-indigo-500 shadow-md shadow-indigo-200/80"
           : "shadow-sm"
       }`}
       onClick={handleClick}
     >
       {size.name}
     </button>
   </div>
 );
};

export default SizeColor