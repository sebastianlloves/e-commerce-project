import React from "react";
import { Outlet } from "react-router-dom";
import NavBarPropio from "../../Components/Navbar/NavBarPropio";

const WithNavbar = () => {
  return (
    <div className="bg-white" >
      <NavBarPropio />
      <Outlet />
    </div>
  );
};

export default WithNavbar;
