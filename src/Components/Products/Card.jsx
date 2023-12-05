import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

function Tarjeta({ product: { id, name, imagesURL, price } }) {
  return (
    <Link
      to={`/product/${id}`}
      className="card group relative flex flex-col justify-between rounded-lg hover:bg-zinc-50 p-4 pb-6 shadow-zinc-200 transition-all duration-300 hover:scale-[100.5%] hover:shadow-md border-2 border-transparent hover:border-zinc-100"
    >
      <div className="flex h-60 w-full justify-center items-center overflow-hidden rounded-md border border-stone-100 bg-white p-6 duration-300 group-hover:opacity-90">
        <img
          src={imagesURL[0]}
          className="h-full object-contain object-center"
        />
      </div>
      <div className="mt-4 flex h-1/6 flex-col justify-between">
          <h3 className="max-h-[1.5em] overflow-hidden text-sm text-gray-700">
            {name}
          </h3>
        <p className="text-sm font-medium text-gray-900">{`U$D ${price}`}</p>
      </div>
    </Link>
  );
}

export default Tarjeta;
