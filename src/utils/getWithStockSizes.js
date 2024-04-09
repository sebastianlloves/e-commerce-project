export const getWithStockSizes = (color) => {
  const { sizes } = color;
  return sizes?.filter((size) => size.stock > 0) || [];
};
