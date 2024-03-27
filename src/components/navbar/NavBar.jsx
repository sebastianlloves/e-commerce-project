import MenuButtons from "./MenuButtons";
import CartButton from "./CartButton";
import MobileMenuToggle from "./MobileMenuToggle";
import Logo from "./Logo";
import { useState } from "react";
import "./Navbar.css";
import { MENU_OPTIONS } from "../../constants";

export default function NavBar() {
  const [mobileToggleisOpen, setMobileToggleIsOpen] = useState(false);

  return (
    <header
      className="scroll-navbar fixed top-0 z-10 flex h-16 w-full flex-col items-start justify-start bg-azure-950/95 font-navbar text-base font-medium text-slate-300 shadow-[0_7px_9px_-3px_rgba(36,46,71,0.3)] backdrop-blur lg:items-center"
      style={{ viewTransitionName: "navbar" }}
    >
      <nav className="z-10 flex h-full w-full max-w-7xl items-center justify-between px-8  font-bold">
        <MobileMenuToggle
          handleClick={() => setMobileToggleIsOpen(!mobileToggleisOpen)}
          isOpen={mobileToggleisOpen}
        />
        <Logo className="logo" />
        <div className="flex h-full w-1/2 items-center justify-between space-x-6 max-lg:hidden">
          {MENU_OPTIONS.map((menu_option) => (
            <MenuButtons key={menu_option.title} menuOption={menu_option} />
          ))}
        </div>
        <CartButton className="carrito" />
      </nav>
      <div
        className={`scroll-navbar [backdrop-filter: blur(15px);] flex min-h-screen w-1/3 flex-col items-start justify-start space-y-6 bg-inherit py-6 backdrop-blur transition-all duration-200 lg:hidden px-2${
          mobileToggleisOpen
            ? " opacity-1 shadow-[0_7px_9px_-3px_rgba(36,46,71,0.3)] "
            : " -translate-x-full opacity-0"
        }`}
      >
        {MENU_OPTIONS.map((menu_option) => (
          <MenuButtons
            key={menu_option.title}
            menuOption={menu_option}
            handleClick={() => setMobileToggleIsOpen(false)}
          />
        ))}
      </div>
    </header>
  );
}
