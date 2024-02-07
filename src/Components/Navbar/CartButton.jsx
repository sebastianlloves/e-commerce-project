import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Carrito() {
  const cartItems = useSelector(selectCartItems);
  const countItems = cartItems.reduce(
    (previo, actual) => previo + Number(actual.countSelected),
    0
  );

  return (
    <div className="flow-root w-[4em] duration-300 hover:scale-105 hover:text-slate-50">
      <Link to="/cart" className="group mx-2 flex items-center p-2">
        <ShoppingBagIcon
          className="group- h-6 flex-shrink-0"
          aria-hidden="true"
        />
        <span
          className={`${
            countItems == 0 && "opacity-0"
          } ml-2 text-sm font-medium`}
        >
          {countItems}
        </span>
      </Link>
    </div>
  );
}

export default Carrito;
