import {React, useState} from 'react'

function SelectorCantidad({ quantity }) {
  const [cantidad, setCantidad] = useState(quantity);

  function handleAumentar (){
    setCantidad(cantidad + 1)
  }

  function handleDisminuir() {
    setCantidad(cantidad - 1);
  }

  return (
    <div className="flex content-center">
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 duration-100 hover:border-slate-500 disabled:bg-slate-100 disabled:hover:border-slate-300"
        onClick={handleDisminuir}
        disabled={cantidad === 1}
      >
        -
      </button>
      <div>{cantidad}</div>
      <button
        className="mx-2 rounded-md border-2 border-slate-300 px-2 duration-100 hover:border-slate-500"
        onClick={handleAumentar}
      >
        +
      </button>
    </div>
  );
}

export default SelectorCantidad