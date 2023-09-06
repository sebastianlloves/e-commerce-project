import {useState} from "react";

const BotonColor = ({color, selectedColor, setSelectedColor}) => {

  return (
    <div>
     <button className={`m-3 w-10 h-10 ${color.clase} rounded-full border border-gray-300 ${selectedColor === color && 'ring ring-gray-400 ring-offset-2'}`} onClick={(e)=>{
      e.preventDefault()
      setSelectedColor(color)
     }}></button>
    </div>
  );
};

export default BotonColor;
