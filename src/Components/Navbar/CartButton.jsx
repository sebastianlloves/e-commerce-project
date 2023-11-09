import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Carrito() {
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="flow-root">
      <Link to="/cart" className="group mx-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 flex-shrink-0 text-slate-300 duration-200 group-hover:scale-105  group-hover:text-slate-50"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-slate-300 duration-200 group-hover:text-slate-50">
          {cartItems.reduce(
            (previo, actual) => previo + Number(actual.countSelected),
            0
          )}
        </span>
      </Link>
    </div>
  );
}

export default Carrito;
