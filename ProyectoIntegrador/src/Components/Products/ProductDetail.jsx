import { useState } from "react";
import { useProducts } from "./ProductsProvider";
import BotonColor from "./BotonColor";
import { RadioGroup } from "@headlessui/react";

const ProductDetail = ({ id }) => {
  const product = useProducts().find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="mx-auto my-10 grid max-w-screen-xl grid-cols-1 grid-rows-3 gap-x-10 border-2 lg:grid-cols-2 lg:grid-rows-2">
      {/* Imagen */}
      <div className="max-w-md justify-self-center p-4 lg:max-w-full lg:border-r lg:border-gray-200 lg:p-8">
        <div className="mx-auto overflow-hidden rounded-lg">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="p-4 lg:order-3 lg:border-r lg:border-gray-200 lg:p-8">
        <h3 className="sr-only">Description</h3>
        <h1 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        <p className="text-base text-gray-800">{product.description}</p>
      </div>

      {/* Selección */}
      <div className="border-2 p-4 lg:row-span-2 lg:p-8">
        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

        <form className="mt-10">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <BotonColor />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
