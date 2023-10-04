import Tarjeta from "./Tarjeta";
import { useProducts } from "./ProductsProvider";
import React from "react";

function Home() {
  const products = useProducts();
  return (
    <div className="mx-auto min-h-max max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Tarjeta key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
