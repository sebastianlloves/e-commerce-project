import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const ContinueShoppingButton = () => {
  return (
    <Link
      to="../"
      className="group flex rounded-full w-min hover:w-max border border-sky-900/30 p-2 font-normal text-slate-500 shadow-sky-300/70 transition-all duration-700 hover:shadow-md"
    >
      <ChevronLeftIcon className="w-8" />
      <button className="group-hover:opacity-100 absolute opacity-0 transition-all duration-700 group-hover:static">
        Seguir Comprando
      </button>
    </Link>
  );
};

export default ContinueShoppingButton;
