
function Tarjeta({
  product: { id, name, href, imageSrc, imageAlt, price, color },
}) {
  return (
    <div
      key={id}
      className="group relative bg-zinc-50 p-4 pb-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
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
      </div>
    </div>
  );
}

export default Tarjeta;
