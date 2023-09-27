import React from "react";
import { Link } from "react-router-dom";

function Tarjeta({
  product: { id, name, href, images, price, colors, sizes, description },
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="group relative flex flex-col justify-between rounded-lg bg-zinc-50 p-4 pb-6 shadow-sm shadow-zinc-200 transition-all duration-300 hover:scale-[102%] hover:shadow-lg"
    >
      <div className="flex h-3/4 w-full items-center overflow-hidden rounded-md bg-white px-6 lg:aspect-none group-hover:opacity-75 ">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <h3 className="max-h-[1.5em] overflow-hidden text-sm text-gray-700">
            {name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{`U$D ${price}`}</p>
      </div>
    </Link>
  );
}

export default Tarjeta;
