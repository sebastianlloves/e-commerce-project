import MenuButtons from "./MenuButtons";
import CartButton from "./CartButton";
import Hamburguesa from "./Hamburguesa";
import Logo from "./Logo";
import React from "react";
import "./Navbar.css";

export default function NavBar() {
  const menu_options = [
    { title: "Indumentaria", value: "clothes" },
    { title: "Tecnología", value: "technology" },
    { title: "Joyas", value: "jewelry" },
  ];

  return (
    <header
      className="scroll-navbar fixed top-0 z-10 flex h-16 w-full justify-center bg-azure-950/95 py-1 font-navbar text-base font-medium text-slate-300 shadow-[0_7px_9px_-3px_rgba(36,46,71,0.3)] backdrop-blur"
      style={{ viewTransitionName: "navbar" }}
    >
      <nav
        aria-label="Top"
        className="flex w-full max-w-7xl items-center justify-between px-8"
      >
        <Hamburguesa />
        <Logo className="logo" />
        <div className="flex h-full w-1/2 items-center justify-between space-x-6 max-lg:hidden">
          {menu_options.map((m) => (
            <MenuButtons key={m.title} menuOption={m} />
          ))}
        </div>
        <CartButton className="carrito" />
      </nav>
    </header>
  );
}
