import { React, createContext, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "./ProductsProvider";

const ProductSelectionContext = createContext(null);
const ProductSelectionDispatchContext = createContext(null);

function ProductSelectionProvider({ children }) {
  const id = Number(useParams().id);
  const product = useProducts().find((p) => Number(p.id) === id);
  const [productSelection, dispatch] = useReducer(productSelectionReducer, {
    id: id,
    color: product.colors[0].name,
    size: product.sizes.filter((s) => s.inStock)[0].name,
    quantity: 1,
  });

  return (
    <ProductSelectionContext.Provider value={productSelection}>
      <ProductSelectionDispatchContext.Provider value={dispatch}>
        {children}
      </ProductSelectionDispatchContext.Provider>
    </ProductSelectionContext.Provider>
  );
}

function useProductSelection() {
  return useContext(ProductSelectionContext);
}

function useProductSelectionDispatch() {
  return useContext(ProductSelectionDispatchContext);
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

export {
  ProductSelectionProvider,
  useProductSelection,
  useProductSelectionDispatch,
};
