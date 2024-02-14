import React from "react";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

function Logo() {
  return (
    <ViewTransitionLink to="/">
      <div className="m-2 flex">
        <img
          src="/assets/your-brand-logos_white.png"
          className="logo w-[5.5rem] text-[#F5F5F5] transition-all duration-300 hover:scale-[102%]"
        />
      </div>
    </ViewTransitionLink>
  );
}

export default Logo;
