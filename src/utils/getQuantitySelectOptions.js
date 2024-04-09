export const getQuantitySelectOptions = (stock) => {
  const selectOptions = [];
  for (let quantityValue = 1; quantityValue <= stock; quantityValue++) {
    selectOptions.push(quantityValue);
  }

  return selectOptions;
};
