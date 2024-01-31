import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="m-2 flex">
      <Link to="/">
        <img src="../../../public/assets/your-brand-logos_white.png" className="w-[5.5rem] text-[#F5F5F5] hover:scale-[102%] transition-all duration-300" />
      </Link>
    </div>
  );
}

export default Logo;
