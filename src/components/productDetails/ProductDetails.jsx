// Traer acá los estados de selección del producto, y las acciones para mandar al carrito. Pensar si los estados se pueden pasar a un custom hook.

import { useState } from "react";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import QuantitySelection from "./QuantitySelection";
import AddToCartButton from "./AddToCartButton";

function ProductDetails({ product }) {
  const [userSelection, setUserSelection] = useState({
    color: null,
    size: null,
    quantity: null,
  });
  const { colors, name, imagesURL, description, price, id } = product;

  return (
    <div className="mx-auto grid h-min min-h-screen max-w-screen-md grid-cols-1 gap-x-16 p-12 lg:max-w-screen-xl lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min w-4/5 justify-self-center py-4 lg:w-full lg:py-12">
        <div className="mx-auto overflow-hidden rounded-lg bg-white p-6 shadow-sm shadow-gray-200">
          <img
            src={imagesURL[0]}
            className="img-product m-auto h-full object-cover object-center"
            style={{ viewTransitionName: `img-product-${id}` }}
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="flex flex-col justify-stretch p-8 lg:order-3 lg:p-12">
        <h3 className="sr-only">Description</h3>
        <h1
          className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          // style={{ viewTransitionName: `title-product-${id}` }}
        >
          {name}
        </h1>
        <p className="text-pretty text-base text-gray-800">{description}</p>
      </div>

      {/* Selección */}
      <div className="h-min justify-self-start py-12 lg:row-span-3 lg:px-20">
        <p
          className="text-3xl tracking-tight text-gray-900"
          // style={{ viewTransitionName: `price-product-${id}` }}
        >{`U$D ${price}`}</p>

        <div className="mt-20 space-y-10 lg:space-y-20">
          <ColorSelection />
          <SizeSelection />          
          <QuantitySelection />

          {/* <AddToCartButton
            selection={{
              id,
              colorSelected,
              sizeSelected,
              countSelected,
              ...product,
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
