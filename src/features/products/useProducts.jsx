import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "./productsSlice";

export const useProducts = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(getProductsThunk());
    }
  }, []);

  return { loading, error, products };
};
