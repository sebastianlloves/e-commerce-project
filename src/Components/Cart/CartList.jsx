import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, deleteItem } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import CountSelector from "./CountSelector";
import { TrashIcon } from "@heroicons/react/24/outline";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

const CartList = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <ul role="list" className="mx-6 divide-y divide-gray-200">
        {cartItems.map(
          ({
            id,
            colorSelected,
            sizeSelected,
            countSelected,
            imagesURL,
            name,
            price,
            idCartItem,
          }) => (
            <li
              key={`${id}-${colorSelected}-${sizeSelected}`}
              className="flex items-center py-6"
            >
              <ViewTransitionLink to={`../product/${id}`}>
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border-transparent p-2 shadow-md shadow-stone-300">
                  <img
                    src={imagesURL[0]}
                    className="img-product max-h-full max-w-full object-cover object-center"
                    style={{ viewTransitionName: `img-product-${id}` }}
                  />
                </div>
              </ViewTransitionLink>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <div className="w-1/4 ">
                      <h3 className="mb-4">
                        <Link to={`../product/${id}`} className="line-clamp-1">
                          {name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm font-normal text-gray-500">
                        Color: {colorSelected}
                      </p>
                      <p className="mt-1 text-sm font-normal text-gray-500">
                        Talle: {sizeSelected}
                      </p>
                    </div>
                    <div className="flex w-1/4 items-center justify-center text-sm">
                      <CountSelector itemData={{ idCartItem, countSelected }} />
                      <div className="mx-4 flex"></div>
                    </div>
                    <div className="flex w-1/5 flex-col items-center">
                      <p>{`U$D ${(price * countSelected).toFixed(2)}`}</p>
                      <TrashIcon
                        className="w-6 cursor-pointer pt-8 text-indigo-700 duration-200 hover:text-indigo-500"
                        onClick={() => {
                          dispatch(deleteItem(idCartItem));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="mt-8 border-t border-gray-400 px-4 py-8 sm:px-6">
        <div className="flex justify-between text-lg font-medium text-gray-900">
          <p>Subtotal</p>
          <p className="w-1/5 text-center text-xl font-bold">
            U$D{" "}
            {cartItems
              .reduce(
                (prevValue, currentValue) =>
                  prevValue + currentValue.price * currentValue.countSelected,
                0
              )
              .toFixed(2)}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Envío e impuestos calculados al finalizar compra.
        </p>
        <div className="mt-6">
          <a className="my-10 flex w-1/4 cursor-pointer items-center justify-center rounded-md border border-transparent bg-azure-950/95 px-6 py-3 text-base font-medium text-white shadow-md shadow-azure-800/80 duration-300 hover:bg-azure-950">
            Finalizar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartList;
