import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";

const WithNavbar = () => {
  return (
    <div className="bg-white" >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WithNavbar;
