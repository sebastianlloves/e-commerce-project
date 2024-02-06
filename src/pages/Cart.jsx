import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import CartList from "../Components/Cart/CartList";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  // console.log(cartItems);

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex w-3/4 max-w-screen-lg flex-col">
        <h2 className="mb-20 mt-24 text-center text-3xl font-semibold uppercase text-slate-800">
          Carrito
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
