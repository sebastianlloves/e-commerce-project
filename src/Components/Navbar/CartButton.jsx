import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

function Carrito() {
  const cartItems = useSelector(selectCartItems);
  const countItems = cartItems.reduce(
    (previo, actual) => previo + Number(actual.countSelected),
    0
  );

  return (
    <ViewTransitionLink to="/cart" className="group h-full p-2">
      <div className="flex h-full w-[4em] flex-nowrap items-center justify-center duration-300 hover:scale-105 hover:text-slate-50">
        <ShoppingBagIcon
          className="group h-6 flex-shrink-0"
          aria-hidden="true"
        />
        <span
          className={`${
            countItems == 0 && "opacity-0"
          } ml-2 text-sm font-medium`}
        >
          {countItems}
        </span>
      </div>
    </ViewTransitionLink>
  );
}

export default Carrito;
