import { React } from "react";
import { useDispatch } from "react-redux";
import { addOneCount, reduceOneCount } from "../../features/cart/cartSlice";

function CountSelector({ itemData: { idCartItem, countSelected } }) {
  const dispatch = useDispatch();

  return (
    <div className="flex  items-center">
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 text-xl font-bold text-slate-400 duration-100 hover:border-slate-500 disabled:border-0 disabled:bg-slate-100 disabled:hover:border-slate-300"
        disabled={countSelected === 1}
        onClick={() => dispatch(reduceOneCount(idCartItem))}
      >
        -
      </button>
      <div className="border-1 border-transparent px-2 text-base font-bold text-slate-700">
        {countSelected}
      </div>
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 text-xl font-bold text-slate-400 duration-100 hover:border-slate-500"
        onClick={() => dispatch(addOneCount(idCartItem))}
      >
        +
      </button>
    </div>
  );
}

export default CountSelector;
