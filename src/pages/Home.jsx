import Tarjeta from "../Components/Products/Card";
import React from "react";
import { Spinner } from "../Components/Spinner.jsx";
import { useProducts } from "../features/products/useProducts";

const Home = () => {
  const { loading, error, products } = useProducts();

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
