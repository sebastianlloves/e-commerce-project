import { React, useReducer } from "react";
import { useProducts } from "../ProductsProvider";
import { useParams } from "react-router-dom";
import BotonColor from "./BotonColor";
import BotonTalle from "./BotonTalle";
import BotonComprar from "./BotonComprar";

const ProductDetail = () => {
  const id = Number(useParams().id);
  const product = useProducts().find(
    (obj_product) => Number(obj_product.id) === id
  );
  console.log(useProducts()); 
  
  const [productSelection, dispatch] = useReducer( productSelectionReducer, product ? 
    {
      id: id,
      color: product.colors[0].name,
      size: product.sizes.filter((s) => s.inStock)[0].name,
      quantity: 1,
    }
    : null
  );
  /* 
  const productSelection = useProductSelection();
  const id = productSelection.id;
  const product = useProducts().find((p) => p.id === id); */

  if(!product) return <p>Producto no encontrado</p>;

  return (
    <div className=" mx-auto grid h-full max-w-screen-xl grid-cols-1 gap-x-10 bg-slate-50 py-24 lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min w-full justify-self-center p-4 lg:border-r-2 lg:border-gray-200 lg:p-12">
        <div className="mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="h-min p-8 lg:order-3 lg:border-r-2 lg:border-gray-200 lg:p-12 ">
        <h3 className="sr-only">Description</h3>
        <h1 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        <p className="text-base text-gray-800">{product.description}</p>
      </div>

      {/* Selección */}
      <div className="h-min p-10 lg:row-span-2 lg:p-12">
        <p className="text-3xl tracking-tight text-gray-900">{`U$D ${product.price}`}</p>

        <form className="mt-20 space-y-10 lg:space-y-20">
          <div>
            {/* Selección Color */}
            <h3 className="text-base font-semibold text-gray-900">
              Color:{" "}
              <span className=" font-normal">{productSelection.color}</span>
            </h3>
            <div className="my-4 flex">
              {product.colors.map((color) => {
                return <BotonColor key={color.name} color={color} />;
              })}
            </div>
          </div>

          <div>
            {/* Selección Talle */}
            <h3 className="text-base font-semibold text-gray-900">Talle</h3>
            <div className="my-4 flex flex-wrap">
              {product.sizes
                .filter((s) => s.inStock)
                .map((size) => {
                  return <BotonTalle key={size.name} size={size} />;
                })}
            </div>
          </div>

          <BotonComprar id={id} />
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;



function productSelectionReducer(state, action) {
  switch (action.type) {
    case "SET_SIZE": {
      return { ...state, size: action.size };
    }
    case "SET_COLOR": {
      return { ...state, color: action.color };
    }
  }
}

