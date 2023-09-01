import React from "react";
import { useProducts } from "../ProductsContext";
import { useCart } from "../CartProvider";
import SelectorCantidad from "./SelectorCantidad";

function CartList() {
  const products = useProducts()
  const articlesCart = useCart().map((objCart) => {
    return {
      ...products.find((p) => p.id === objCart.id),
      quantity: objCart.quantity,
    };
  });

  console.log(articlesCart)

  return (
    <div className="m-auto flex w-3/4 max-w-screen-lg flex-col py-6">
      <h2 className="mb-14 text-center text-5xl font-bold text-slate-800">
        Carrito
      </h2>
      <ul role="list" className="m-6 divide-y divide-gray-200">
        {articlesCart.map((item) => (
          <li key={item.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="w-1/4">
                    <a href={item.href}>{item.name}</a>
                  </h3>

                  <div className="flex w-1/4 items-center justify-center text-sm">
                    <SelectorCantidad id={item.id} />
                    <div className="mx-4 flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remover
                      </button>
                    </div>
                  </div>

                  <p className="ml-4">{item.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-lg font-medium text-gray-900">
          <p>Subtotal</p>
          <p>
            ${" "}
            {articlesCart.reduce(
              (prevValue, currentValue) =>
                prevValue +
                parseInt(currentValue.price.split(" ")[1]) *
                  currentValue.quantity,
              0
            )}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Envío e impuestos calculados al finalizar compra.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="my-10 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-sky-800 px-6 py-3 text-base font-medium text-white shadow-md shadow-sky-700 hover:bg-sky-900"
          >
            Finalizar
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartList;
