import { getWithStockSizes } from "./getWithStockSizes";

export const getNewStateColorChanging = (newColor, prevUserSelection) => {
  const { sizeSelected: prevSize } = prevUserSelection;
  const inStockSizes = getWithStockSizes(newColor);
  const hasInStockSameSize = inStockSizes.some(
    (inStockSize) => inStockSize.name === prevSize
  );

  if (!hasInStockSameSize) return {
    colorSelected: newColor,
    sizeSelected: undefined,
    countSelected: undefined,
  };

  const newStock = inStockSizes.find(
    (inStockSize) => inStockSize.name === prevSize
  ).stock;
  const newQuantity = getNewStateQuantity(newStock, prevUserSelection);

  return {
    colorSelected: newColor,
    sizeSelected: prevSize,
    countSelected: newQuantity,
  };
};

export const getNewStateSizeChanging = (newSize, prevUserSelection) => {
  const { name, stock } = newSize;

  return {
    ...prevUserSelection,
    sizeSelected: name,
    countSelected: getNewStateQuantity(stock, prevUserSelection),
  };
};


const getNewStateQuantity = (newStock, prevUserSelection) => {
  const { countSelected: prevQuantity } = prevUserSelection;

  return prevQuantity <= newStock ? prevQuantity : 1;
};
