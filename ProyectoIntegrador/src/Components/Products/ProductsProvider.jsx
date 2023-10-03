import React from "react";
import { createContext, useContext } from "react";
import useData from "./useData";
/* import { useParams, useLocation } from "react-router-dom"; */

const ProductsContext = createContext(null);
const SetProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const products = useData("https://fakestoreapi.com/products").products;
  const setProducts = useData("https://fakestoreapi.com/products").setProducts;
  console.log("Cargo ProductsProvider");
  console.log(products);

  
  return (
    <ProductsContext.Provider value={products}>
      <SetProductsContext.Provider value={setProducts}>
      {children}
      </SetProductsContext.Provider>
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

function useSetProducts() {
  return useContext(SetProductsContext);
}

export { ProductsProvider, useProducts, useSetProducts };

