import { React, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useCartDispatch } from "../Carrito/CartProvider";
import useData from "./useData";

const ProductDetail = () => {
  const id = Number(useParams().id);
  const product = useData("https://fakestoreapi.com/products").find(
    (p) => p.id === id
  );
  console.log(
    product
      ? product.colors[0].name + product.sizes[0].name
      : "No se halló producto"
  );

  return (
    <>
      {product && (
        <Detalles
          product={product}
          key={[product.colors[0].name, product.sizes[0].name]}
        />
      )}
    </>
  );
};

export default ProductDetail;




function Detalles({
  product: { id, colors, sizes, name, images, description, price },
}) {
  const [productSelection, dispatch] = useReducer(productSelectionReducer, {
    id: id,
    color: colors[0].name,
    size: sizes.filter((s) => s.inStock)[0].name,
    quantity: 1,
  });

  console.log(productSelection);

  return (
    <div className=" mx-auto grid h-full max-w-screen-xl grid-cols-1 gap-x-10 bg-slate-50 py-24 lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min w-full justify-self-center p-4 lg:border-r-2 lg:border-gray-200 lg:p-12">
        <div className="mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="h-min p-8 lg:order-3 lg:border-r-2 lg:border-gray-200 lg:p-12 ">
        <h3 className="sr-only">Description</h3>
        <h1 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>
        <p className="text-base text-gray-800">{description}</p>
      </div>

      {/* Selección */}
      <div className="h-min p-10 lg:row-span-2 lg:p-12">
        <p className="text-3xl tracking-tight text-gray-900">{`U$D ${price}`}</p>

        <form className="mt-20 space-y-10 lg:space-y-20">
          <div>
            {/* Selección Color */}
            <h3 className="text-base font-semibold text-gray-900">
              Color:{" "}
              <span className=" font-normal">{productSelection.color}</span>
            </h3>
            <div className="my-4 flex">
              {colors.map((color) => {
                return (
                  <BotonColor
                    key={color.name}
                    color={color}
                    productSelection={productSelection}
                    dispatch={dispatch}
                  />
                );
              })}
            </div>
          </div>

          <div>
            {/* Selección Talle */}
            <h3 className="text-base font-semibold text-gray-900">Talle</h3>
            <div className="my-4 flex flex-wrap">
              {sizes
                .filter((s) => s.inStock)
                .map((size) => {
                  return (
                    <BotonTalle
                      key={size.name}
                      size={size}
                      productSelection={productSelection}
                      dispatch={dispatch}
                    />
                  );
                })}
            </div>
          </div>

          <BotonComprar
            id={productSelection.id}
            productSelection={productSelection}
          />
        </form>
      </div>
    </div>
  );
}

function BotonColor({ color, productSelection, dispatch }) {
  return (
    <div>
      <button
        className={`m-3 h-10 w-10 duration-300 ${
          color.clase
        } rounded-full border border-gray-300 shadow-gray-400/50 ${
          productSelection.color === color.name
            ? "shadow-lg ring-1 ring-gray-600 ring-offset-2"
            : "shadow-md"
        } active:-translate-y-0.5 `}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SET_COLOR", color: color.name });
        }}
      ></button>
    </div>
  );
}

function BotonTalle({ size, productSelection, dispatch }) {
  return (
    <div>
      <button
        className={`m-3 h-14 min-w-[3.5rem] px-4 rounded-md border border-gray-300 bg-slate-50 text-sm font-medium text-gray-600 shadow-indigo-300 duration-300 active:-translate-y-0.5 ${
          productSelection.size === size.name
            ? "scale-110 border-indigo-500 shadow-md shadow-indigo-200/80"
            : "shadow-sm"
        }`}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SET_SIZE", size: size.name });
        }}
      >
        {size.name}
      </button>
    </div>
  );
}

function BotonComprar({ id, productSelection }) {
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
