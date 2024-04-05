import { useMemo } from "react";

export function useFilteredProducts(products, filterCriteria) {
  const { category } = filterCriteria;
  
  const showedProducts = useMemo(() => {
    return category
      ? products?.filter((p) => p.category === category)
      : products;
  }, [products, category]);

  return {showedProducts}
}
