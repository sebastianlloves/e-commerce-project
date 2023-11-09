import React from "react";
import { Link } from "react-router-dom";

function MenuButtons({ menuOption }) {
  return (
    <Link
      to={`/${menuOption.value}`}
      className="group relative mx-4 flex w-40 items-center justify-center overflow-hidden px-4 text-base font-medium text-slate-300 transition-all duration-500 hover:text-slate-200"
    >
      <span>{menuOption.title}</span>
    </Link>
  );
}

export default MenuButtons;
