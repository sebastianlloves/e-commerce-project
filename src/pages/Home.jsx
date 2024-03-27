import Card from "../Components/card/Card.jsx";
import { Spinner } from "../Components/spinner/Spinner.jsx";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData.jsx";
import { URL_API_PRODUCTS } from "../constants.js";

export default function Home() {
  const category = useParams().category;
  console.log(URL_API_PRODUCTS);
  const {
    data: products,
    loading,
    error,
  } = useData(URL_API_PRODUCTS, category);

  return (
    <div className="mx-auto flex h-full min-h-screen max-w-2xl flex-col items-center justify-start gap-y-10 px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
      <h1 className="my-8 inline bg-gradient-to-tr from-[#000428] to-indigo-800/90 bg-clip-text text-center text-6xl font-black tracking-tighter text-transparent drop-shadow-[1px_1px_3px_#000428] sm:text-7xl lg:text-8xl">
        YOUR BRAND
      </h1>
      {loading && <Spinner />}
      {!loading && error && (
        <div className="flex h-[80vh] w-full items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-gray-950">
            No se han podido cargar los productos
          </h1>
        </div>
      )}
      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
