import { useState } from "react";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import QuantitySelection from "./QuantitySelection";
import AddToCartButton from "./AddToCartButton";

function ProductDetails({ product }) {
  const { colors, name, imagesURL, description, price, id } = product;
  const [userSelection, setUserSelection] = useState({
    colorSelected: colors[0],
    sizeSelected: undefined,
    countSelected: undefined,
  });

  return (
    <div className="mx-auto grid h-min min-h-screen max-w-screen-md grid-cols-1 gap-x-16 p-12 lg:max-w-screen-xl lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min justify-self-center w-full lg:py-12">
        <div className="mx-auto w-full overflow-hidden rounded-lg p-6 bg-white shadow-sm shadow-gray-200">
          <img
            src={imagesURL[0]}
            className="img-product m-auto h-full max-h-[40vh] object-cover object-center"
            style={{
              viewTransitionName: `img-product-${id}-color${userSelection.colorSelected.name}-size${userSelection.sizeSelected}`,
            }}
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="flex flex-col justify-stretch py-8 lg:px-6 lg:order-3">
        <h3 className="sr-only">Description</h3>
        <h1 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>
        <p className="text-pretty text-base text-gray-800">{description}</p>
      </div>

      {/* Selección */}
      <div className="h-min w-full justify-self-start py-12 lg:row-span-3 lg:px-20">
        <p className="text-3xl tracking-tight text-gray-900">{`U$D ${price}`}</p>

        <div className="mt-20 space-y-10">
          <ColorSelection
            userSelection={userSelection}
            setUserSelection={setUserSelection}
            colors={colors}
          />
          <SizeSelection
            userSelection={userSelection}
            setUserSelection={setUserSelection}
          />
          <QuantitySelection
            userSelection={userSelection}
            setUserSelection={setUserSelection}
          />

          <AddToCartButton
            selection={{
              id,
              ...userSelection,
              ...product,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
