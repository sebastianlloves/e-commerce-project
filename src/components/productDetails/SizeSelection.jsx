import { getSizeButtonClasses } from "../../utils/getButtonClasses";
import { getNewStateSizeChanging } from "../../utils/getNewStateUserSelection";
import { getWithStockSizes } from "../../utils/getWithStockSizes";

function SizeSelection({ userSelection, setUserSelection }) {
  const { colorSelected, sizeSelected } = userSelection;
  const showedSizes = getWithStockSizes(colorSelected);

  const createHandleClick = (newSize) => () =>
    setUserSelection(getNewStateSizeChanging(newSize, userSelection));

  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Talle:</h3>
      <div className="my-4 flex flex-wrap">
        {showedSizes.map((showedSize) => {
          return (
            <button
              key={showedSize.name}
              className={getSizeButtonClasses(showedSize.name, sizeSelected)}
              onClick={createHandleClick(showedSize)}
            >
              {showedSize.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SizeSelection;
