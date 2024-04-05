import { COLOR_CLASSES } from "../../constants";
import { getColorButtonClasses } from "../../utils/getButtonClasses";

function ColorSelection({ userSelection, setUserSelection, colors }) {
  const createHandleClick = (color) => () =>
    setUserSelection({ ...userSelection, color });

  return (
    <>
      <h3 className="text-base font-semibold text-gray-900">
        Color: <span className=" font-normal">{userSelection?.color.name}</span>
      </h3>
      <div className="my-4 flex">
        {colors?.map((color) => (
          <button
            key={color.name}
            className={getColorButtonClasses(
              COLOR_CLASSES,
              color,
              userSelection.color
            )}
            onClick={createHandleClick(color)}
          ></button>
        ))}
      </div>
    </>
  );
}

export default ColorSelection;
