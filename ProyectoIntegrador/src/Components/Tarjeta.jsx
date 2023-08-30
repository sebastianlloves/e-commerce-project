import React from "react";

function Tarjeta({
  product: { id, name, href, imageSrc, imageAlt, price, color },
}) {
  return (
    <div
      key={id}
      className="group relative rounded-lg bg-zinc-50 p-4 pb-6 shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
