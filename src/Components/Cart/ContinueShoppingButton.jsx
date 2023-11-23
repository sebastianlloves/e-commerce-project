import React from "react";
import { Link } from "react-router-dom";

const ContinueShoppingButton = () => {
  return (
    <Link to="../">
      <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-900/60 to-indigo-800/60 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-[0.5px] focus:ring-indigo-500/70">
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-200 ease-in group-hover:bg-opacity-0">
          Seguir Comprando
        </span>
      </button>
    </Link>
  );
};

export default ContinueShoppingButton;
