import React from "react";
import { Link } from "react-router-dom";

function Tarjeta({
  product: { id, name, href, images, price, colors, sizes, description },
}) {
  return (
    <Link to={`/product/${id}`}
      className="group relative rounded-lg bg-zinc-50 p-4 pb-6 shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
              {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{`${colors
            .map((c) => c.name)
            .join(" - ")}`}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </Link>
  );
}

export default Tarjeta;
