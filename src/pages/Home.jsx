import Tarjeta from "../Components/Products/Card";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../Components/Spinner.jsx";
import { getProductsThunk } from "../features/products/productsSlice";

const Home = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(getProductsThunk())
      console.log('Efecto desde Home')
    }
  }, []);

  
  if (!loading && error)
    return (
      <h1 className="text-center text-4xl font-bold text-gray-950">
        No se han podido cargar los productos
      </h1>
    );

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {loading && (
        <div className="m-auto">
          <Spinner />
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Tarjeta key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
