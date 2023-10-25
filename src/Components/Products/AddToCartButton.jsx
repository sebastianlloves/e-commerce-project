import React from 'react'
import { useDispatch } from 'react-redux'
import {addItem} from '../../features/cart/cartSlice'

const AddToCartButton = ({selection}) => {
    const { id, colorSelected, sizeSelected, countSelected } = selection;
    const dispatch = useDispatch()

  return (
    <div>
      <button
        type="button"
        className="mx-auto mt-20 flex w-1/2 min-w-fit items-center justify-center rounded-md border border-transparent bg-sky-800 px-8 py-3 text-base font-medium text-white shadow-md shadow-sky-200 duration-300 hover:bg-sky-900 active:-translate-y-0.5 active:shadow-lg active:ring-1 active:ring-sky-700 active:ring-offset-2 disabled:bg-gray-400 disabled:shadow-slate-200 lg:w-full"
        disabled={!(id && colorSelected && sizeSelected && countSelected)}
        onClick={()=> dispatch(addItem(selection))}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default AddToCartButton