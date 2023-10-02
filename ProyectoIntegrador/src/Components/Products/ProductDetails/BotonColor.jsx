import React from "react";
import {
  useProductSelection,
  useProductSelectionDispatch,
} from "../ProductSelectionProvider";

export default function BotonColor({ color }) {
  const dispatch = useProductSelectionDispatch();
  const productSelection = useProductSelection();

  return (
    <div>
      <button
        className={`m-3 h-10 w-10 duration-300 ${
          color.clase
        } rounded-full border border-gray-300 shadow-gray-400/50 ${
          productSelection.color === color.name
            ? "shadow-lg ring-1 ring-gray-600 ring-offset-2"
            : "shadow-md"
        } active:-translate-y-0.5 `}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SET_COLOR", color: color.name });
        }}
      ></button>
    </div>
  );
}
