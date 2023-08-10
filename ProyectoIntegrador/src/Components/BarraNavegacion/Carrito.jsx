import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Carrito() {
  return (
    <div className="flow-root">
      <a href="#" className="group mx-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 flex-shrink-0 text-slate-300 group-hover:text-slate-50"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-slate-300 group-hover:text-slate-50">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}

export default Carrito;
