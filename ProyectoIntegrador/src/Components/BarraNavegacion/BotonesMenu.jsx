import React from "react";

function BotonesMenu({ name_menu }) {

  return (
    <a
      key="Menu A"
      href="#"
      className="relative flex items-center text-base font-medium text-slate-300  hover:text-slate-200 transition-all duration-500 w-40 mx-4 px-4 justify-center group overflow-hidden"
    >
      <span className="uppercase">{name_menu}</span>
      {/* <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-slate-600 opacity-40 group-hover:animate-shine" /> */}
      <span className="absolute -bottom-1 left-0 w-0 h-2  bg-slate-50/70  transition-all duration-700 group-hover:w-full"></span>
    </a>
  );
}

export default BotonesMenu;
