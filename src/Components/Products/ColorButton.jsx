import React from "react";

const ColorButton = ({ color, colorSelected, handleClick }) => {
  const clases = `m-3 h-10 w-10 duration-300 ${
    color.clase
  } rounded-full border border-gray-300 shadow-gray-400/50 ${
    colorSelected === color.name
      ? " shadow-md shadow-indigo-500/90 ring-[1.2px] ring-indigo-500 ring-offset-[0.5px]"
      : "shadow-sm"
  } active:-translate-y-0.5 `;

  return <button className={clases} onClick={handleClick}></button>;
};

export default ColorButton;
