import { useEffect, useState } from "react";
import { filterProductsByCategory } from "../utils/filterProductsByCategory";

export default function useData(url, category) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        if(!response.ok) throw new Error('Error de conexión')
        return response.json();
      })
      .then((json) => {
        const filteredProducts = filterProductsByCategory(json, category)
        setData(filteredProducts)
      })
      .catch(error => setError(error))
      .finally(()=> setLoading(false))
  }, []);

  return { data, loading, error };
}
