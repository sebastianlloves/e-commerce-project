export const getButtonClasses = (COLOR_CLASSES, color, selectedColor) =>
  `${
    COLOR_CLASSES[color.name]
  } m-3 h-10 w-10 duration-300 rounded-full border border-gray-300 shadow-gray-400/50 active:-translate-y-0.5 ${
    selectedColor?.name === color.name
      ? " shadow-lg ring-[2px] ring-neutral-500 ring-offset-2"
      : "shadow-sm"
  }`;
