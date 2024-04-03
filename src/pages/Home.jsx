import { Spinner } from "../components/spinner/Spinner.jsx";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts.js";
import { URL_API_PRODUCTS } from "../constants.js";
import NoProducts from "../Components/noProducts/NoProducts.jsx";
import CardsList from "../Components/cards/CardsList.jsx";
import { useFilteredProductsByCategory } from "../hooks/useFilteredProductsByCategory.js";

export default function Home() {
  const category = useParams().category;
  const { products, loading, error } = useProducts(URL_API_PRODUCTS);
  const { showedProducts } = useFilteredProductsByCategory(products, category);

  return (
    <div className="min-h-80vh mx-auto flex h-full max-w-2xl flex-col gap-y-10 px-8 py-10 sm:px-6 lg:max-w-7xl">
      <h1 className="inline bg-gradient-to-tr from-[#000428] to-indigo-800/90 bg-clip-text text-center text-6xl font-black tracking-tighter text-transparent drop-shadow-[1px_1px_3px_#000428] sm:text-7xl lg:text-8xl">
        YOUR BRAND
      </h1>
      {loading && <Spinner />}
      {!loading && error && <NoProducts />}
      {!loading && !error && <CardsList products={showedProducts} />}
    </div>
  );
}
