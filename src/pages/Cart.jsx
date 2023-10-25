import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import {selectAllProducts} from '../features/products/productsSlice'
import CountSelector from "../Components/Cart/CountSelector";

function CartList() {
  const cartItems = useSelector(selectCartItems)
  console.log(cartItems)

  
  return (
    <div className="h-screen w-full bg-white">
      <div className="m-auto flex w-3/4 max-w-screen-lg flex-col py-24">

        <h2 className="my-10 text-left text-3xl font-semibold uppercase text-slate-800">
          Mi Carrito
        </h2>

        <Link to="../">
          <button>Seguir Comprando</button>
        </Link>

        {cartItems.length > 0 ? <ListaCompra /> : <EmptyCart />}

      </div>
    </div>
  );
}


function ListaCompra() {
  
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <ul role="list" className="m-6 divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li
            key={`${item.id}-${item.colorSelected}-${item.sizeSelected}`}
            className="flex items-center py-6"
          >
            <Link
              to={`../product/${item.id}`}
              className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border-transparent p-2 shadow-md shadow-stone-300"
            >
              <img
                src={item.images[0].src}
                alt={item.images[0].alt}
                className="max-h-full max-w-full object-cover object-center"
              />
            </Link>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <div className="w-1/4 ">
                    <h3 className="mb-4">
                      <Link to={`../product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm font-normal text-gray-500">
                      Color: {item.colorSelected}
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-500">
                      Talle: {item.sizeSelected}
                    </p>
                  </div>
                  <div className="flex w-1/4 items-center justify-center text-sm">
                    <CountSelector item={item} />
                    <div className="mx-4 flex"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p>{`U$D ${item.price}`}</p>
                    <button
                      type="button"
                      className="pt-8 font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                          type: "REMOVE",
                          id: item.id,
                          color: item.colorSelected,
                          size: item.sizeSelected,
                        });
                      }}
                    >
                      Remover
                    </button>
                  </div>
                </div>
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
            {articlesCart
              .reduce(
                (prevValue, currentValue) =>
                  prevValue + currentValue.price * currentValue.quantity,
                0
              )
              .toFixed(2)}
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

function EmptyCart() {
  return (
    <h2 className="my-10 text-center text-lg font-semibold text-slate-800">
      Tu carrito está vacío
    </h2>
  );
}

export default CartList