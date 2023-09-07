import { useState } from "react";
import { useProducts } from "./ProductsProvider";
import { useParams } from "react-router-dom";
import { useCart, useSetCart } from "../Carrito/CartProvider";

const ProductDetail = ({idP}) => {
  const id = idP || Number(useParams().id) 
  const product = useProducts().find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.filter((s) => s.inStock)[0]
  );


  return (
    <div className="mx-auto grid h-full min-h-0 max-w-screen-xl grid-cols-1 gap-x-10 bg-slate-50 py-12 lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min w-full justify-self-center p-4 lg:border-r-2 lg:border-gray-200 lg:p-12">
        <div className="mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-sm shadow-gray-200">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full max-h-80 w-full object-cover object-center"
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
        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

        <form className="mt-20 space-y-10 lg:space-y-20">
          <div>
            {/* Selección Color */}
            <h3 className="text-base font-semibold text-gray-900">
              Color: <span className=" font-normal">{selectedColor.name}</span>
            </h3>
            <div className="my-4 flex">
              {product.colors.map((color) => {
                return (
                  <BotonColor
                    key={color.name}
                    color={color}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                );
              })}
            </div>
          </div>

          <div>
            {/* Selección Talle */}
            <h3 className="text-base font-semibold text-gray-900">Talle</h3>
            <div className="my-4 flex flex-wrap">
              {product.sizes.map((size) => {
                return (
                  <BotonTalle
                    key={size.name}
                    size={size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                );
              })}
            </div>
          </div>

          <BotonComprar
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setSelectedSize={setSelectedSize}
            id={id}
          />
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;

function BotonColor({ color, selectedColor, setSelectedColor }) {
  return (
    <div>
      <button
        className={`m-3 h-10 w-10 duration-300 ${
          color.clase
        } rounded-full border border-gray-300 shadow-gray-400 ${
          selectedColor === color
            ? "shadow-md ring-1 ring-gray-600 ring-offset-2"
            : "shadow-sm"
        } active:-translate-y-0.5 `}
        onClick={(e) => {
          e.preventDefault();
          setSelectedColor(color);
        }}
      ></button>
    </div>
  );
}

function BotonTalle({ size, selectedSize, setSelectedSize }) {
  if (size.inStock) {
    return (
      <div>
        <button
          className={`m-3 h-14 w-14 rounded-md border border-gray-300 bg-slate-50 text-sm font-medium text-gray-600 shadow-indigo-300 duration-300 active:-translate-y-0.5 ${
            selectedSize === size
              ? "shadow-md scale-110 shadow-indigo-200 border-indigo-500"
              : "shadow-sm"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedSize(size);
          }}
        >
          {size.name}
        </button>
      </div>
    );
  }
}

function BotonComprar({
  selectedSize,
  selectedColor,
  setSelectedColor,
  setSelectedSize,
  id
}) {
  const cart = useCart();
  const setCart = useSetCart();
  const quantity = 1

  function handleClick(e) {
    e.preventDefault();
    !cart.find(
      (objCart) =>
        objCart.id == id &&
        objCart.colorSelected == selectedColor.name &&
        objCart.sizeSelected == selectedSize.name
    ) ? 
    setCart([...cart, {id:id, quantity:quantity, colorSelected: selectedColor.name, sizeSelected: selectedSize.name}])
    :
    setCart(cart.map(objCart => {
      if(objCart.id == id && 
        objCart.colorSelected == selectedColor.name &&
        objCart.sizeSelected == selectedSize.name) {
          return {
            id: objCart.id,
            quantity: objCart.quantity + quantity,
            colorSelected: objCart.colorSelected,
            sizeSelected: objCart.sizeSelected,
          };
        }
      return objCart
    }))

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
