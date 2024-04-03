import { useEffect, useState } from "react";
import { filterProductsByCategory } from "../utils/filterProductsByCategory";
import { fetchData } from "../services/fetchData";

export default function useData(url, productsCategory) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    console.log("Haciendo fetching datos");
    fetchData(url)
      .then((json) => {
        const filteredProducts = filterProductsByCategory(
          json,
          productsCategory
        );
        console.log(filteredProducts)
        setData(filteredProducts);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [productsCategory]);

  return { data, loading, error };
}
