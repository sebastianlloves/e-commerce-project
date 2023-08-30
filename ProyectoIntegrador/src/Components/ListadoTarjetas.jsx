import Tarjeta from "./Tarjeta";
import { useProducts } from "./ProductsContext";

function ListadoTarjetas() {
  const products = useProducts()
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Tarjeta key={product.id} product={product} />
        ))}
      </div>
      <div className="hover:opacity-75 opacity-50 hover:scale-150 scale-125"></div>
    </div>
  );
}

export default ListadoTarjetas;
