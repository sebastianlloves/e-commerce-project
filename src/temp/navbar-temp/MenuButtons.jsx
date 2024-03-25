import React from "react";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

function MenuButtons({ menuOption, handleClick }) {
  return (
    <button
      className="group relative flex w-40 items-center overflow-hidden px-4 transition-all duration-500"
      onClick={handleClick}
    >
      <ViewTransitionLink to={`/${menuOption.value}`}>
        <h4 className="transition-all duration-300 hover:text-slate-100">
          {menuOption.title}
        </h4>
      </ViewTransitionLink>
    </button>
  );
}

export default MenuButtons;
