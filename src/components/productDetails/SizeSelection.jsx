import { getSizeButtonClasses } from "../../utils/getButtonClasses";

function SizeSelection({ userSelection, setUserSelection }) {
  const {
    color: { sizes },
    size,
  } = userSelection;
  const showedSizes = sizes.filter((size) => size.stock > 0) || [];

  const createHandleClick = (sizeName) => () =>
    setUserSelection({ ...userSelection, size: sizeName });

  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Talle:</h3>
      <div className="my-4 flex flex-wrap">
        {showedSizes.map(({name: showedSize}) => {
          return (
            <button
              key={showedSize}
              className={getSizeButtonClasses(showedSize, size)}
              onClick={createHandleClick(showedSize)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default SizeSelection;
