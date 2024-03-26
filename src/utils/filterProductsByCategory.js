export function filterProductsByCategory(products, category) {
  const filteredProducts = category
    ? products?.filter((p) => p.category === category)
    : products;
  return filteredProducts;
}
