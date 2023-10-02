import React from "react";
import {
  useProductSelection,
  useProductSelectionDispatch,
} from "../ProductSelectionProvider";

export default function BotonTalle({ size }) {
  const dispatch = useProductSelectionDispatch();
  const productSelection = useProductSelection();

  return (
    <div>
      <button
        className={`m-3 h-14 w-14 rounded-md border border-gray-300 bg-slate-50 text-sm font-medium text-gray-600 shadow-indigo-300 duration-300 active:-translate-y-0.5 ${
          productSelection.size === size.name
            ? "scale-110 border-indigo-500 shadow-md shadow-indigo-200/80"
            : "shadow-sm"
        }`}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SET_SIZE", size: size.name });
        }}
      >
        {size.name}
      </button>
    </div>
  );
}
