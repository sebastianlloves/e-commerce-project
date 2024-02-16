import { React } from "react";
import { useDispatch } from "react-redux";
import { addOneCount, reduceOneCount } from "../../features/cart/cartSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

function CountSelector({ itemData: { idCartItem, countSelected } }) {
  const dispatch = useDispatch();
  const classButtons =
    "m-auto text-slate-700 hover:font-extrabold hover:text-slate-900 group-disabled:text-slate-300 duration-200";

  return (
    <div className="flex items-center rounded-md border-[1px] border-gray-200 p-2 shadow-sm">
      <button
        className="group w-[2rem] border px-2"
        disabled={countSelected === 1}
        onClick={() => dispatch(reduceOneCount(idCartItem))}
      >
        <MinusIcon className={classButtons} />
      </button>
      <div className="border-1 border-transparent px-6 text-base font-bold text-slate-600">
        {countSelected}
      </div>
      <button
        className="group w-[2rem] px-2"
        onClick={() => dispatch(addOneCount(idCartItem))}
      >
        <PlusIcon className={classButtons} />
      </button>
    </div>
  );
}

export default CountSelector;
