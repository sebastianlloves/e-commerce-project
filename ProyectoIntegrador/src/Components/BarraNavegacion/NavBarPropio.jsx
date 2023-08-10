import BotonesMenu from "./BotonesMenu";
import Hamburguesa from "./Hamburguesa";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import Logo from "./Logo";

export default function NavBarPropio() {
  return (
    <header className="relative bg-slate-900">
      <nav aria-label="Top" className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center">
          <Hamburguesa />
          <Logo />
        </div>
        <div className="flex h-16 w-1/2 justify-center items-center">
          <Popover.Group className="lg:ml-8 lg:block lg:self-stretch ">
            <div className="flex h-full space-x-8">
              <BotonesMenu name_menu="Menu A"/>
              <BotonesMenu name_menu="Menu B"/>
              <BotonesMenu name_menu="Menu C"/>
            </div>
          </Popover.Group>
        </div>
      </nav>
    </header>
  );
}
