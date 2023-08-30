import React from "react";
import { useProducts } from "../ProductsContext";
import SelectorCantidad from './SelectorCantidad'

function ArticlesList() {
  const products = useProducts();

  return (
    <div className="m-auto flex w-3/4 max-w-screen-lg flex-col py-6">
      <h2 className="text-center text-5xl font-bold text-slate-800">Carrito</h2>
      <ul role="list" className="m-6 divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  
                  <h3>
                    <a href={product.href}>{product.name}</a>
                  </h3>

                  <div className="flex flex-1 items-end justify-center text-sm">
                    <SelectorCantidad quantity={product.quantity}/>
                    <p className="text-gray-500">
                      Cantidad: {product.quantity}
                    </p>
                    <div className="flex mx-4">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remover
                      </button>
                    </div>
                  </div>

                  <p className="ml-4">{product.price}</p>

                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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
            {products.reduce(
              (prevValue, currentValue) =>
                prevValue + parseInt(currentValue.price.split(" ")[1]),
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

export default ArticlesList;
