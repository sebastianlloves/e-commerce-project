import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";

const WithNavbar = () => {
  return (
    <>
      <NavBar className="block" />
      <div className="absolute top-16 z-[-2] w-full bg-[radial-gradient(ellipse_50%_40%_at_50%_-15%,rgba(2,48,71,0.2),rgba(255,255,255,0))]">
        <Outlet className="relative max-h-full" />
        <Footer />
      </div>
    </>
  );
};

export default WithNavbar;
