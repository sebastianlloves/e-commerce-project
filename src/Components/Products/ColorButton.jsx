import React from "react";

const ColorButton = ({ color, colorSelected, handleClick }) => {
  const colorClasses = {
    Rojo: "bg-red-900/80",
    Amarillo: "bg-amber-400/80",
    Negro: "bg-slate-950/80",
    Gris: "bg-zinc-700/80",
    Azul: "bg-blue-900/80",
    Marrón: "bg-amber-950/80",
    Verde: "bg-green-800/80",
  };
   const clases = `${colorClasses[color.name]}${" "} m-3 h-10 w-10 duration-300 rounded-full border border-gray-300 shadow-gray-400/50 active:-translate-y-0.5 ${
     colorSelected === color.name
       ? " shadow-md shadow-indigo-500/90 ring-[1.2px] ring-indigo-500 ring-offset-2"
       : "shadow-sm"
   }`;

  return (
    <div>
      <button className={clases} onClick={handleClick}></button>
    </div>
  );
};

export default ColorButton;


 