import React from "react";
import { createContext, useContext } from "react";
import useData from "./useData";
/* import { useParams, useLocation } from "react-router-dom"; */

const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const products = useData("http://localhost:3004/products");
  console.log("Cargo ProductsProvider");
  console.log(products);

  
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductsProvider, useProducts };

