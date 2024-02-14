import React from "react";
import "./Card.css";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

function Card({ product: { id, name, imagesURL, price } }) {
  return (
    <div className="card flex flex-col justify-between rounded-lg border-2 border-transparent p-4 pb-6 shadow-zinc-200 transition-all duration-300 hover:scale-[101%] hover:border-zinc-100 hover:bg-zinc-50 hover:shadow-md">
      <ViewTransitionLink to={`/product/${id}`}>
        <div className="flex h-60 w-full items-center justify-center overflow-hidden rounded-md border border-stone-100 bg-white p-6 duration-300 group-hover:opacity-90">
          <img
            src={imagesURL[0]}
            className="h-full object-contain object-center"
            style={{ viewTransitionName: `img-product-${id}` }}
          />
        </div>
        <div className="mt-4 flex h-1/6 flex-col justify-between">
          <h3
            className="max-h-[1.5em] overflow-hidden text-sm text-gray-700"
            // style={{ viewTransitionName: `title-product-${id}` }}
          >
            {name}
          </h3>
          <p
            className="text-sm font-medium text-gray-900"
            // style={{ viewTransitionName: `price-product-${id}` }}
          >{`U$D ${price}`}</p>
        </div>
      </ViewTransitionLink>
    </div>
  );
}

export default Card;
