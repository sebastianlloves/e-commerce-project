import { getQuantitySelectOptions } from "../../utils/getQuantitySelectOptions";

function QuantitySelection({ userSelection, setUserSelection }) {
  const { colorSelected, sizeSelected, countSelected } = userSelection;
  const { sizes: colorSizesStock } = colorSelected;
  const { stock, selectOptions } = getQuantitySelectOptions(
    colorSizesStock,
    sizeSelected
  );

  const handleSelectChange = ({ target: { value } }) =>
    setUserSelection({ ...userSelection, countSelected: Number(value) });

  return (
    <div className="flex flex-col text-sm font-medium text-gray-900 ">
      <h3 className="my-4 text-base font-semibold text-gray-900">Cantidad:</h3>
      <div className="flex items-center gap-x-3 text-base text-slate-400">
        <select
          name="quantity"
          onChange={handleSelectChange}
          value={countSelected}
          disabled={stock === 0}
          className="bg-whit m-3 block w-16 rounded-md border border-gray-300 p-3 text-sm text-gray-900 shadow-azure-900 focus:border-azure-500 focus:shadow-md focus:outline-none focus:ring-azure-500"
        >
          {selectOptions.map((optionValue, index) => (
            <option value={optionValue} key={optionValue || index}>
              {optionValue}
            </option>
          ))}
        </select>{" "}
        {stock > 0 && <span>{`(${stock} disponibles)`}</span>}
      </div>
    </div>
  );
}

export default QuantitySelection;
