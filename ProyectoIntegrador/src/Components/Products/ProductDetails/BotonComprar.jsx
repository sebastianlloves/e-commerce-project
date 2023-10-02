import React from "react";
import { useProductSelection } from "../ProductSelectionProvider";
import { useCartDispatch } from "../../Carrito/CartProvider";

export default function BotonComprar({ id }) {
  const productSelection = useProductSelection();
  const dispatch = useCartDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CART",
      id: id,
      productSelection: productSelection,
    });
  }

  return (
    <div>
      <button
        type="submit"
        className="mx-auto mt-20 flex w-1/2 min-w-fit items-center justify-center rounded-md border border-transparent bg-sky-800 px-8 py-3 text-base font-medium text-white shadow-md shadow-sky-200 duration-300 hover:bg-sky-900 active:-translate-y-0.5 active:shadow-lg active:ring-1  active:ring-sky-700 active:ring-offset-2 lg:w-full"
        onClick={handleClick}
      >
        Agregar al carrito
      </button>
    </div>
  );
}