export const getQuantitySelectOptions = (colorSizesStock = [], sizeSelected) => {
  const stock = colorSizesStock.find(
    (colorSize) => colorSize.name === sizeSelected
  )?.stock;
  if(!stock) return {stock: 0, selectOptions: ['-']}

  const selectOptions = [];
  for (let quantityValue = 1; quantityValue <= stock; quantityValue++) {
    selectOptions.push(quantityValue);
  }
  return {stock, selectOptions}
};
