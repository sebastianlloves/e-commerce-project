import { getWithStockSizes } from "./getWithStockSizes";

export const getNewStateColorChanging = (newColor, prevUserSelection) => {
  const { size: prevSize } = prevUserSelection;
  const inStockSizes = getWithStockSizes(newColor);
  const hasInStockSameSize = inStockSizes.some(
    (inStockSize) => inStockSize.name === prevSize
  );

  if (!hasInStockSameSize) return { color: newColor, size: null, quantity: 1 };

  const newStock = inStockSizes.find(
    (inStockSize) => inStockSize.name === prevSize
  ).stock;
  const newQuantity = getNewStateQuantity(newStock, prevUserSelection);

  return { color: newColor, size: prevSize, quantity: newQuantity };
};

export const getNewStateSizeChanging = (newSize, prevUserSelection) => {
  const { name, stock } = newSize;

  return {
    ...prevUserSelection,
    size: name,
    quantity: getNewStateQuantity(stock, prevUserSelection),
  };
};


const getNewStateQuantity = (newStock, prevUserSelection) => {
  const { quantity: prevQuantity } = prevUserSelection;

  return prevQuantity <= newStock ? prevQuantity : 1;
};
