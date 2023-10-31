import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";

const WithNavbar = () => {
  return (
    <div className="bg-white" >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WithNavbar;
