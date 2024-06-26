import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const WithNavbar = () => {
  return (
    <>
      <div className="relative top-0 z-[-2] w-full bg-[radial-gradient(ellipse_50%_40%_at_50%_-15%,rgba(2,48,71,0.2),rgba(255,255,255,0))] pt-32 ">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default WithNavbar;
