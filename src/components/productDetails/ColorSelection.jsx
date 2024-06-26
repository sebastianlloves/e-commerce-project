import { COLOR_CLASSES } from "../../constants";
import { getColorButtonClasses } from "../../utils/getButtonClasses";
import { getNewStateColorChanging } from "../../utils/getNewStateUserSelection";

function ColorSelection({ userSelection, setUserSelection, colors }) {
  const createHandleClick = (color) => () =>
    setUserSelection(getNewStateColorChanging(color, userSelection));

  return (
    <>
      <h3 className="text-base font-semibold text-gray-900">
        Color:{" "}
        <span className="font-normal">
          {userSelection?.colorSelected?.name}
        </span>
      </h3>
      <div className="flex items-start">
        {colors?.map((color) => (
          <button
            key={color.name}
            className={getColorButtonClasses(
              COLOR_CLASSES,
              color,
              userSelection.colorSelected
            )}
            onClick={createHandleClick(color)}
          ></button>
        ))}
      </div>
    </>
  );
}

export default ColorSelection;
