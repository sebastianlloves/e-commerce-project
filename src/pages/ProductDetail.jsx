import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ColorButton from "../Components/Products/ColorButton";
import SizeButton from "../Components/Products/SizeButton";
import CountSelection from "../Components/Products/CountSelection";
import AddToCartButton from "../Components/Products/AddToCartButton";
import { Spinner } from "../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../features/products/productsSlice";

const ProductDetail = () => {
  const id = Number(useParams().id);
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(getProductsThunk());
    }
    if (product) setColorSelected(product.colors[0].name);
  }, [product]);

  const [colorSelected, setColorSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [countSelected, setCountSelected] = useState(undefined);

  if (!loading && error)
    return (
      <div className="bg-slate-50">
        <h1>Hubo un error en la solicitud</h1>
      </div>
    );

  if ((loading && !error) || !product) {
    return (
      <div className="h-screen w-screen">
        <div className=" mx-auto flex h-full max-w-screen-xl items-center justify-center bg-slate-50 transition-all duration-300">
          <Spinner />
        </div>
      </div>
    );
  }

  const { colors, name, imagesURL, description, price } = product;

  return (
    <div className="mx-auto grid h-min max-w-screen-xl grid-cols-1 gap-x-10 bg-slate-50 py-24 lg:grid-cols-2">
      {/* Imagen */}
      <div className="h-min w-full justify-self-center p-4 lg:border-r-2 lg:border-gray-200 lg:p-12">
        <div className="mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200">
          <img
            src={imagesURL[0]}
            className="m-auto h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="h-min p-8 lg:order-3 lg:border-r-2 lg:border-gray-200 lg:p-12">
        <h3 className="sr-only">Description</h3>
        <h1 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>
        <p className="text-base text-gray-800">{description}</p>
      </div>

      {/* Selección */}
      <div className="h-min px-10 lg:row-span-3 lg:px-12">
        <p className="text-3xl tracking-tight text-gray-900">{`U$D ${price}`}</p>

        <div className="mt-20 space-y-10 lg:space-y-20">
          <div>
            {/* Selección Color */}
            <h3 className="text-base font-semibold text-gray-900">
              Color: <span className=" font-normal">{colorSelected}</span>
            </h3>
            <div className="my-4 flex">
              {colors.map((color) => {
                return (
                  <ColorButton
                    key={color.name}
                    color={color}
                    colorSelected={colorSelected}
                    handleClick={() => {
                      setColorSelected(color.name);
                      if (color.name !== colorSelected) {
                        setSizeSelected(null)
                        setCountSelected(1)
                      }
                    }}
                  ></ColorButton>
                );
              })}
            </div>
          </div>
          <div>
            {/* Selección Talle */}
            <h3 className="text-base font-semibold text-gray-900">Talle:</h3>
            <div className="my-4 flex flex-wrap">
              {colors
                .find((c) =>
                  colorSelected
                    ? c.name == colorSelected
                    : c.name == product.colors[0].name
                )
                .sizes.filter((s) => s.stock > 0)
                .map((size) => {
                  return (
                    <SizeButton
                      key={size.name}
                      size={size}
                      sizeSelected={sizeSelected}
                      handleClick={() => {
                        setSizeSelected(size.name)
                        if(sizeSelected !== size.name) setCountSelected(1)
                      }}
                    />
                  );
                })}
            </div>
          </div>
          {/* Selección Cantidad */}
          <CountSelection
            stock={sizeSelected && colors
              .find((c) => c.name === colorSelected)
              .sizes.find((s) => s.name === sizeSelected).stock}
            countSelected={countSelected}
            handleSelect={(e) => setCountSelected(Number(e.target.value))}
          />
          <AddToCartButton
            selection={{
              id,
              colorSelected,
              sizeSelected,
              countSelected,
              ...product,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
