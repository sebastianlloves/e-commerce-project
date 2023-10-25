import React from "react";

const ColorButton = ({ color, colorSelected, handleClick }) => {
  return (
    <button
      className={`m-3 h-10 w-10 duration-300 ${
        color.clase
      } rounded-full border border-gray-300 shadow-gray-400/50 ${
        colorSelected === color.name
          ? "shadow-lg ring-1 ring-gray-600 ring-offset-2"
          : "shadow-md"
      } active:-translate-y-0.5 `}
      onClick={handleClick}
    ></button>
  );
};

export default ColorButton;
