import { useDispatch } from "react-redux";
import { addOneCount, reduceOneCount } from "../../features/cart/cartSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import "./CountSelector.css";

function CountSelector({ itemData: { idCartItem, countSelected } }) {
  const dispatch = useDispatch();
  const classButtons =
    "m-auto text-slate-500 font-extrabold hover:font-extrabold hover:text-slate-900 group-disabled:text-slate-300 duration-200";

  return (
    <div className="count-selector flex max-w-[9rem] items-center justify-around rounded-md border-[1px] border-gray-200 p-2 shadow-sm ">
      <button
        className="group w-[2.5rem] px-2"
        disabled={countSelected === 1}
        onClick={() => dispatch(reduceOneCount(idCartItem))}
      >
        <MinusIcon className={classButtons} />
      </button>
      <div className="px-6 text-base font-bold text-slate-600">
        {countSelected}
      </div>
      <button
        className="group w-[2.5rem] px-2"
        onClick={() => dispatch(addOneCount(idCartItem))}
      >
        <PlusIcon className={classButtons} />
      </button>
    </div>
  );
}

export default CountSelector;
