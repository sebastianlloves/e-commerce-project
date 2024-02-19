import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import CartList from "../Components/Cart/CartList";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  // console.log(cartItems);

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex max-w-screen-lg flex-col px-4 md:px-10">
        <h2 className="mb-20 mt-28 bg-gradient-to-r from-azure-950 to-indigo-800/90 bg-clip-text text-center text-5xl font-bold uppercase text-transparent drop-shadow-[1px_1px_2px_rgba(61,84,144,0.67)]">
          CARRITO
        </h2>

        {cartItems.length > 0 ? <CartList /> : <EmptyCart />}
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <h2 className="my-20 text-center text-lg font-semibold text-slate-800">
      Tu carrito todavía está vacío
    </h2>
  );
}

export default Cart;
