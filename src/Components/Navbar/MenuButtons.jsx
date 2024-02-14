import React from "react";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

function MenuButtons({ menuOption }) {
  return (
    <ViewTransitionLink
      to={`/${menuOption.value}`}
      className="group relative mx-4 flex w-40 items-center justify-center overflow-hidden px-4 transition-all duration-500 hover:text-slate-100"
    >
      <span>
        {menuOption.title}
      </span>
    </ViewTransitionLink>
  );
}

export default MenuButtons;
