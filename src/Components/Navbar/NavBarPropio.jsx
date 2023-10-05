import BotonesMenu from "./MenuButtons";
import Carrito from "./CartButton";
import Hamburguesa from "./Hamburguesa";
import Logo from "./Logo";
import React from "react";

export default function NavBarPropio() {
  return (
    <header className="fixed z-10 w-full bg-slate-900">
      <nav
        aria-label="Top"
        className=" mx-auto flex h-16 max-w-7xl items-center justify-between px-8"
      >
        <Hamburguesa />
        <Logo />
        <div className="flex h-full justify-center space-x-6 text-slate-200 max-lg:hidden">
          <BotonesMenu name_menu="Anteojos" />
          <BotonesMenu name_menu="Calzado" />
          <BotonesMenu name_menu="Jeans" />
          <BotonesMenu name_menu="Remeras" />
        </div>
        <Carrito />
      </nav>
    </header>
  );
}
