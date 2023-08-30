
function Tarjeta({
  product: { id, name, href, imageSrc, imageAlt, price, color },
}) {
  return (
    <div
<<<<<<< HEAD
      key={id}
=======
      key={product.id}
>>>>>>> 968e44c431533b7c65acd5bd4aef234f6c60feb7
      className="group relative bg-zinc-50 p-4 pb-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
<<<<<<< HEAD
          src={imageSrc}
          alt={imageAlt}
=======
          src={product.imageSrc}
          alt={product.imageAlt}
>>>>>>> 968e44c431533b7c65acd5bd4aef234f6c60feb7
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
<<<<<<< HEAD
          <h3 className="text-sm text-gray-700 font-semibold">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-900 mt-6 px-6 py-3 rounded-full shadow-md shadow-slate-500 text-slate-300 font-semibold hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-700 transition-all duration-200">
          COMPRAR
        </button>
=======
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
>>>>>>> 968e44c431533b7c65acd5bd4aef234f6c60feb7
      </div>
    </div>
  );
}

export default Tarjeta;
