import BotonesMenu from "./BotonesMenu";
import Carrito from "./Carrito";
import Hamburguesa from "./Hamburguesa";
import Logo from "./Logo";

export default function NavBarPropio() {
  return (
    <header className="relative bg-slate-900">
      <nav
        aria-label="Top"
        className="flex justify-between mx-auto h-16 max-w-7xl px-8 items-center"
      >
        <Hamburguesa />
        <Logo />
        <div className="flex justify-center h-full space-x-10  max-lg:hidden">
          <BotonesMenu name_menu="Menu A" />
          <BotonesMenu name_menu="Menu B" />
          <BotonesMenu name_menu="Menu C" />
          <BotonesMenu name_menu="Menu D" />
        </div>
        <Carrito/>

      </nav>
    </header>

    
  );
}
