import { getQuantitySelectOptions } from "../../utils/getQuantitySelectOptions";

function QuantitySelection({ userSelection, setUserSelection }) {
  const { color, size, quantity } = userSelection;
  const { sizes: colorSizesStock } = color;
  const stock = colorSizesStock.find(
    (colorSize) => colorSize.name === size
  )?.stock;
  const selectOptions = getQuantitySelectOptions(stock || 1);

  const handleSelectChange = ({ target: { value } }) =>
    setUserSelection({ ...userSelection, quantity: value });

  return (
    <div className="flex flex-col text-sm font-medium text-gray-900 ">
      <h3 className="my-4 text-base font-semibold text-gray-900">Cantidad:</h3>
      <div className="flex items-center gap-x-3 text-slate-400 text-base">
        <select
          name="quantity"
          onChange={handleSelectChange}
          value={quantity}
          className="bg-whit m-3 block w-16 rounded-md border border-gray-300 p-3 text-sm text-gray-900 shadow-azure-900 focus:border-azure-500 focus:shadow-md focus:outline-none focus:ring-azure-500"
        >
          {selectOptions.map((number) => (
            <option value={number} key={number}>
              {number}
            </option>
          ))}
        </select>{" "}
        {stock > 0 && <span>{`(${stock} disponibles)`}</span>}
      </div>
    </div>
  );
}

export default QuantitySelection;
