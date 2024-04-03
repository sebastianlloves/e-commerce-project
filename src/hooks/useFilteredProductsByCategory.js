import { useMemo } from "react";

export function useFilteredProductsByCategory(products, category) {
  const showedProducts = useMemo(() => {
    return category
      ? products?.filter((p) => p.category === category)
      : products;
  }, [products, category]);

  return {showedProducts}
}
