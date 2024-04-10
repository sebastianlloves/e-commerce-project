export const getColorButtonClasses = (COLOR_CLASSES, color, selectedColor) =>
  `${
    COLOR_CLASSES[color.name]
  } mx-3 h-10 w-10 duration-300 rounded-full border border-gray-300 shadow-gray-400/50 active:-translate-y-0.5 ${
    selectedColor?.name === color.name
      ? " shadow-lg ring-[2px] ring-neutral-500 ring-offset-2"
      : "shadow-sm"
  }`;

export const getSizeButtonClasses = (showedSize, selectedSize) =>
  `m-3 h-14 min-w-[3.5rem] rounded-md border bg-white px-4 text-sm font-medium text-gray-600 shadow-azure-300 transition-all duration-300 active:-translate-y-0.5 ${
    selectedSize === showedSize
      ? "scale-110 border-azure-600 shadow-md shadow-azure-700/50"
      : "border-gray-300 shadow-sm"
  }`;
