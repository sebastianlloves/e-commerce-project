import MenuButtons from "./MenuButtons";
import CartButton from "./CartButton";
import MobileMenuToggle from "./MobileMenuToggle";
import Logo from "./Logo";
import React, { useState } from "react";
import "./Navbar.css";

export default function NavBar() {
  const [mobileToggleisOpen, setMobileToggleIsOpen] = useState(false);
  const menu_options = [
    { title: "Indumentaria", value: "clothes" },
    { title: "Tecnología", value: "technology" },
    { title: "Joyas", value: "jewelry" },
  ];

  return (
    <header
      className="scroll-navbar fixed top-0 z-10 flex h-16 w-full flex-col items-start justify-start  bg-azure-950/95 font-navbar text-base font-medium text-slate-300 shadow-[0_7px_9px_-3px_rgba(36,46,71,0.3)] backdrop-blur"
      style={{ viewTransitionName: "navbar" }}
    >
      <nav className="z-10 flex h-full w-full max-w-7xl items-center justify-between  px-8">
        <MobileMenuToggle
          handleClick={() => setMobileToggleIsOpen(!mobileToggleisOpen)}
          isOpen={mobileToggleisOpen}
        />
        <Logo className="logo" />
        <div className="flex h-full w-1/2 items-center justify-between space-x-6 max-lg:hidden">
          {menu_options.map((m) => (
            <MenuButtons key={m.title} menuOption={m} />
          ))}
        </div>
        <CartButton className="carrito" />
      </nav>
      <div
        className={`scroll-navbar flex min-h-screen w-1/3 flex-col items-start justify-start space-y-6 bg-inherit py-6 backdrop-blur-2xl transition-all duration-200 px-2${
          mobileToggleisOpen
            ? " opacity-1 shadow-[0_7px_9px_-3px_rgba(36,46,71,0.3)] "
            : " -translate-x-full opacity-0"
        }`}
      >
        {menu_options.map((m) => (
          <MenuButtons
            key={m.title}
            menuOption={m}
            handleClick={() => setMobileToggleIsOpen(false)}
          />
        ))}
      </div>
    </header>
  );
}
