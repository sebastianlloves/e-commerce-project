import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductById,
  getProductsThunk,
} from "../features/products/productsSlice";
import ColorButton from "../Components/Products/ColorButton";
import SizeColor from "../Components/Products/SizeColor";
import CountSelection from "../Components/Products/CountSelection";
import AddToCartButton from "../Components/Products/AddToCartButton";
import { Spinner } from "../Components/Spinner";

const ProductDetail = () => {
  const id = Number(useParams().id);
  const product = useSelector((state) => selectProductById(state, id));

  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(getProductsThunk())
      console.log('Efecto desde ProductDetail')
    };
  }, []);

  const [colorSelected, setColorSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [countSelected, setCountSelected] = useState(1);


    if (!loading && error)
    return (
      <div className="bg-slate-50">
        <h1>No es encontró el producto solicitado</h1>
      </div>
    );

  if (!product) {
    return (
      <div className="h-screen w-screen">
        <div className=" transition-all duration-300 mx-auto flex justify-center items-center h-full max-w-screen-xl bg-slate-50">
          <Spinner/>
        </div>
      </div>
    );
  }
  const { colors, sizes, name, images, description, price } = product;

  return (
    <div className="mx-auto grid h-full max-w-screen-xl grid-cols-1 gap-x-10 bg-slate-50 py-24 lg:grid-cols-2">
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
                    handleClick={() => setColorSelected(color.name)}
                  ></ColorButton>
                );
              })}
            </div>
          </div>
          <div>
            {/* Selección Talle */}
            <h3 className="text-base font-semibold text-gray-900">Talle:</h3>
            <div className="my-4 flex flex-wrap">
              {sizes
                .filter((s) => s.inStock)
                .map((size) => {
                  return (
                    <SizeColor
                      key={size.name}
                      size={size}
                      sizeSelected={sizeSelected}
                      handleClick={() => setSizeSelected(size.name)}
                    />
                  );
                })}
            </div>
          </div>
          {/* Selección Cantidad */}
          <CountSelection
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
