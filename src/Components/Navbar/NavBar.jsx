import MenuButtons from "./MenuButtons";
import Carrito from "./CartButton";
import Hamburguesa from "./Hamburguesa";
import Logo from "./Logo";
import React from "react";

export default function NavBar() {
  const menu_options = [
    { title: "Indumentaria", value: "clothes" },
    { title: "Tecnología", value: "technology" },
    { title: "Joyas", value: "jewelry" },
  ];

  return (
    <header className="fixed top-0 z-10 w-full bg-[#0A2647] py-1">
      <nav
        aria-label="Top"
        className=" mx-auto flex h-16 max-w-7xl items-center justify-between px-8"
      >
        <Hamburguesa />
        <Logo />
        <div className="flex h-full justify-center space-x-6 text-slate-100 max-lg:hidden">
          {menu_options.map((m) => (
            <MenuButtons key={m} menuOption={m} />
          ))}
        </div>
        <Carrito />
      </nav>
    </header>
  );
}
