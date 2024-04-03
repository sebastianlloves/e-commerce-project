import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";

export function useProducts(url) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    console.log("Haciendo fetching datos");
    fetchData(url)
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}


