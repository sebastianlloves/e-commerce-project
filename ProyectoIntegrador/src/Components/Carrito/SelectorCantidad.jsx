import { React } from "react";
import { useCart, useSetCart } from "./CartProvider";

function SelectorCantidad({ id, colorSelected, sizeSelected }) {
  const cart = useCart();
  const setCart = useSetCart();
  const item = cart.find(
    (objCart) =>
      objCart.id === id &&
      objCart.colorSelected === colorSelected &&
      objCart.sizeSelected === sizeSelected
  );

  function handleAumentar() {
    setCart(
      cart.map((objCart) => {
        if (
          objCart.id === id &&
          objCart.colorSelected === colorSelected &&
          objCart.sizeSelected === sizeSelected
        ) {
          return { ...objCart, quantity: objCart.quantity + 1 };
        }
        return objCart;
      })
    );
  }

  function handleDisminuir() {
    setCart(
      cart.map((objCart) => {
        if (
          objCart.id === id &&
          objCart.colorSelected === colorSelected &&
          objCart.sizeSelected === sizeSelected
        ) {
          return { ...objCart, quantity: objCart.quantity - 1 };
        }
        return objCart;
      })
    );
  }

  console.log(useCart());

  return (
    <div className="flex  items-center">
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 text-xl font-bold text-slate-400 duration-100 hover:border-slate-500 disabled:border-0 disabled:bg-slate-100 disabled:hover:border-slate-300"
        onClick={handleDisminuir}
        disabled={item.quantity === 1}
      >
        -
      </button>
      <div className="border-1 border-transparent px-2 text-base font-bold text-slate-700">
        {item.quantity}
      </div>
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 text-xl font-bold text-slate-400 duration-100 hover:border-slate-500"
        onClick={handleAumentar}
      >
        +
      </button>
    </div>
  );
}

export default SelectorCantidad;
