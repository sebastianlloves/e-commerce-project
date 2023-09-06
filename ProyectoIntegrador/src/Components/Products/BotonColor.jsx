import {useState} from "react";

const BotonColor = (/* {color:{name, clase , selectedClass}} */) => {
  const [isSelected, setIsSelected] = useState(true)

  return (
    <div>
     <button className={`m-3 w-10 h-10 bg-pink-400 rounded-full border border-gray-300 ${isSelected && 'ring ring-gray-400 ring-offset-2'}`} onClick={(e)=>{
      e.preventDefault()
      setIsSelected(!isSelected)
     }}></button>
    </div>
  );
};

export default BotonColor;
